import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Col, Row, Stack } from 'react-bootstrap';
import axios from 'axios';
import APForm from '../ui/APForm';
import APSelect from '../ui/APSelect';
import TeaCard from '../ui/TeaCard';

export default function AdminPage() {
  const [show, setShow] = useState(false);
  const [teas, setTeas] = useState([]);
  const [select, setSelect] = useState(teas);

  useEffect(() => {
    fetch('/api/tea')
      .then((res) => res.json())
      .then((data) => {
        setTeas(data);
        setSelect(data);
      });
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('sort', e.target.sort.value);
    formData.append('name', e.target.name.value);
    formData.append('description', e.target.description.value);
    formData.append('location', e.target.location.value);
    formData.append('country', e.target.country.value);
    formData.append('file', e.target.file.files[0]);
    axios.post(
      '/api/tea',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    ).then((res) => {
      setTeas((prev) => [res.data, ...prev]);
      e.target.reset();
    });
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`/api/tea/${id}`);
      setTeas((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const [selectedCountry, setSelectedCountry] = useState('');
  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
  };
  const encodeCountry = (country) => encodeURI(country);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (selectedCountry) {
          const encodedCountry = encodeCountry(selectedCountry);
          const { data } = await axios.get(`/api/teas/select?country=${encodedCountry}`);
          // setSearch(data);
          setTeas(data);
        }
      } catch (error) {
        console.error('Ошибка при запросе поиска:', error);
      }
    };
  }, [teas, selectedCountry]);

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Button variant="primary" onClick={handleShow}>
          Добавление
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Добавление</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <APForm
              handleClose={handleClose}
              submitHandler={submitHandler}
            />
          </Offcanvas.Body>
        </Offcanvas>
        <div className="p-2 ms-auto">
          <APSelect
            handleCountryChange={handleCountryChange}
            country={select}
          />
        </div>
      </Stack>

      <Row>
        {teas
          ?.filter((el) => (selectedCountry ? el.country === selectedCountry : true))
          .map((tea) => (
            <Col xs={4}>
              <TeaCard
                key={tea.id}
                deleteHandler={deleteHandler}
                tea={tea}
              />
            </Col>
          ))}
      </Row>
    </>
  );
}
