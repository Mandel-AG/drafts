import React, { Component } from 'react';
import {Formik} from 'formik'

class Form extends Component{
    render() {
        return (
          <div className="container-fluid p-5 bg-light
          d-flex flex-column justify-content-center align-items-center">
            <Formik>
              {() => (
                <form className="bg-white border p-5 d-flex flex-column">
                  <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Adresse email</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                </form>
              )}
            </Formik>
          </div>
        )
      }


}

export default Form