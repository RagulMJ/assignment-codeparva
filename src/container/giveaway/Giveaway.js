import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { Formik, Form, Field } from 'formik';
Modal.setAppElement('#root');

function Giveaway() {
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <div className="main mt-5 p-5">
        <div className="container">
          <div className="row">
            <div className="col ">
              <h2 className="head">
                We do take in pets if you can't take care of them !
              </h2>
              <br />
              <p className="respra1">
                Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef
                wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe
                bfewufb efb ebf uewbfiuwefbwefweiuf wueibf iuwbefiu
                efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf
                kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskdb
                efkjebf kjbejk fbwekjsf bkewb{' '}
              </p>
              <div className="b">
                <button
                  type="button"
                  className="btn bg-secondary "
                  onClick={() => setOpen2(true)}
                >
                  Give Away
                </button>
              </div>
              <Modal isOpen={open2} onRequestClose={() => setOpen2(false)}>
                <div className="closebutton">
                  <AiOutlineClose onClick={() => setOpen2(false)} size={20} />
                </div>
                <div className="fromfield">
                  <h2 className="headtitle">Give Away</h2>
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
                          What pet do you want to give away ?
                        </h5>
                        <br />
                        <div className="col-md-4 ">
                          <label className="form-label">Pet Type</label>
                          <span className="star">*</span>
                          <Field
                            name="pettype"
                            as="select"
                            className="form-select"
                          >
                            <option value="">Choose...</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
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
                            <option value="Lab">Lab</option>
                            <option value="PersianCat">Persian cat</option>
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
                            REQUEST FOR GIVE AWAY
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Giveaway;
