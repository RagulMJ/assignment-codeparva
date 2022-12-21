import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './home.css';
import mainImg from '../../assets/img1.jpg';
import Img from '../../assets/img2.jpg';
import Contacts from '../contacts/Contacts';
import Modal from 'react-modal';
import { Formik, Form, Field } from 'formik';
import { AiOutlineClose } from 'react-icons/ai';
import Giveaway from '../giveaway/Giveaway';
import Pettable from '../pet/Pettable';

Modal.setAppElement('#root');

function Home() {
  const [open, setOpen] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [view, setView] = useState('dogs');
  const [breedfilter, setBreedfilter] = useState([]);

  const petdata = [
    {
      id: '1',
      name: 'Dogs',
    },
    {
      id: '2',
      name: 'Cats',
    },
  ];

  const breeds = [
    {
      id: '1',
      petid: 'Dogs',
      breedname: 'Lab',
    },
    {
      id: '2',
      petid: 'Dogs',
      breedname: 'dabarman',
    },
    {
      id: '3',
      petid: 'Cats',
      breedname: 'persion cat',
    },
    {
      id: '4',
      petid: 'Cats',
      breedname: 'country cat',
    },
  ];

  const handlebreed = (id) => {
    const fil = breeds.filter((res) => res.petid === id);
    setBreedfilter(fil);
  };

  return (
    <>
      <Navbar />
      <div className="main mt-5 p-5" id="home">
        <div className="container">
          <div className="row">
            <div className="col ">
              <h2 className="restitle">Welcome to the Animal Shelter !</h2>
              <br />
              <p className="respra">
                Glad that you care for the animals so much.We make sure that
                you'll not repent your decision of adopting your favorite pet !!{' '}
              </p>
              <div className="col ">
                <img src={mainImg} alt="PetImage" className="hideimage" />
              </div>
              <div className="b1">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setOpen(true)}
                >
                  Adopt
                </button>
                <button
                  type="button"
                  className="btn bg-secondary "
                  onClick={() => setOpen3(true)}
                >
                  What all pets do we have ?
                </button>
              </div>

              <Modal isOpen={open3} onRequestClose={() => setOpen3(false)}>
                <div className="closebutton">
                  <AiOutlineClose onClick={() => setOpen3(false)} size={20} />
                </div>
                <div className="fromfield">
                  <h2 className="headtitle">What all pets do we have ?</h2>
                  <br />
                  <div className="hidetable">
                    <h6
                      onClick={() => setView('dogs')}
                      style={{ color: view === 'dogs' ? 'gray' : '' }}
                    >
                      DOGS
                    </h6>
                    |
                    <h6
                      onClick={() => setView('cats')}
                      style={{ color: view === 'cats' ? 'gray' : '' }}
                    >
                      CATS
                    </h6>
                  </div>
                  {view === 'dogs' ? <Pettable /> : <Pettable />}
                </div>
              </Modal>
              <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
                <div className="closebutton">
                  <AiOutlineClose onClick={() => setOpen(false)} size={20} />
                </div>
                <div className="fromfield">
                  <h2 className="headtitle">Adopt a pet</h2>
                  <br />
                  <br />
                  <Formik
                    initialValues={{
                      pettype: '',
                      breed: '',
                      firstName: '',
                      email: '',
                      number: '',
                    }}
                    onSubmit={(values, { resetForm }) => {
                      localStorage.setItem('data', JSON.stringify(values));
                      console.log(values);
                      resetForm({ values: '' });
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <h5 className="headtitle">
                          What pet do you want to adopt ?
                        </h5>
                        <br />
                        <div className="col-md-4 ">
                          <label className="form-label">Pet Type</label>
                          <span className="star">*</span>
                          <Field
                            name="pettype"
                            as="select"
                            className="form-select"
                            onClick={(e) => handlebreed(e.target.value)}
                          >
                            <option value="">Choose...</option>
                            {petdata.map((p) => {
                              return (
                                <option key={p.id} value={p.name}>
                                  {p.name}
                                </option>
                              );
                            })}
                          </Field>
                          {errors.pettype && touched.pettype ? (
                            <div className="error">{errors.pettype}</div>
                          ) : null}
                        </div>
                        <br />
                        <div className="col-md-4 ">
                          <label className="form-label">Breed</label>
                          <span className="star">*</span>
                          <Field
                            name="breed"
                            as="select"
                            className="form-select"
                          >
                            <option value="">Choose...</option>
                            {breedfilter.map((bre, index) => {
                              return (
                                <>
                                  <option key={index} value={bre.breedname}>
                                    {bre.breedname}
                                  </option>
                                </>
                              );
                            })}
                          </Field>
                          {errors.breed && touched.breed ? (
                            <div className="error">{errors.breed}</div>
                          ) : null}
                        </div>
                        <br />
                        <br />
                        <h5 className="headtitle">
                          Please fill in your details
                        </h5>
                        <br />
                        <div className="col-md-4 ">
                          <label className="form-label">Full Name</label>
                          <span className="star">*</span>
                          <Field name="firstName" className="form-control" />
                          {errors.firstName && touched.firstName ? (
                            <div className="error">{errors.firstName}</div>
                          ) : null}
                        </div>
                        <br />
                        <div className="col-md-4 ">
                          <label className="form-label">Email</label>
                          <span className="star">*</span>
                          <Field
                            name="email"
                            type="email"
                            className="form-control "
                          />
                          {errors.email && touched.email ? (
                            <div className="error">{errors.email}</div>
                          ) : null}
                        </div>
                        <br />
                        <div className="col-md-4 ">
                          <label className="form-label">Phone</label>
                          <span className="star">*</span>
                          <Field
                            name="number"
                            type="number"
                            className="form-control "
                          />
                          {errors.number && touched.number ? (
                            <div className="error">{errors.number}</div>
                          ) : null}
                        </div>
                        <div className="submitbutton">
                          <button type="submit" className="btn">
                            REQUEST FOR ADOPTION
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </Modal>
            </div>
            <div className="col ">
              <img src={mainImg} alt="PetImage" className="petimg" />
            </div>
          </div>
        </div>
      </div>
      <Giveaway />
      <div className="main mt-5 p-5">
        <div className="container">
          <div className="row">
            <div className="col  ">
              <img src={Img} alt="" className="lastimg" />
            </div>
            <div className="col ">
              <p className="contents">
                Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef
                wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe
                bfewufb efb ebf uewbfiuwefbwefweiuf wueibf iuwbefiu
                efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf
                kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskdb
                efkjebf kjbejk fbwekjsf bkewb{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contacts />
    </>
  );
}

export default Home;
