import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

function teachers() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <h1 className="px-3 py-1 header-lgradient rounded">Teachers</h1>
            <div className="pt-3"></div>

            <p>There are many teachers who have taught and continue to teach at TKSL since it began in 2008. Our current teachers are listed below.</p>

            <h5>
              <b>Khensur Rinpoche Geshe Tashi Tsering</b>
            </h5>
            <p>Founder, teacher and patron, Khensur Rinpoche began TKSL with the intention of benefiting both Buddhist and non-Buddhist students by educating them on the basis, or how things actually exist. Rinpoche is currently teaching Lama Tsong Khapa’s Lam Rim Chen Mo, Chandrakirti’s Entering the Middle Way and Tarig (Reasons and Logic). See Rinpoche's biography here.</p>
            <h5>
              <b>Venerable Tshering</b>
            </h5>
            <p>Tshering has been Khensur Rinpoche's attendant and translator for more than 20 years, and is one of the original teachers at the school. She has taught many subjects, including the very popular Tibetan classes and Logic for Dummies.</p>
            <h5>
              <b>Venerable Tsewang</b>
            </h5>
            <p>Tsewang is a long-time student of Kensur Rinpoche. She is a graduate and former tutor of the Buddhist Studies Program at Chenrezig Institute. Tsewang is currently teaching Grounds and Paths in our Buddhist Studies series on Tuesday nights. Tsewang also shares translation duties with Tshering.</p>
            <h5>
              <b>Venerable Pema</b>
            </h5>
            <p>Pema is the manager of TKSL, and teaches the Thursday morning class, currently Mind and Mental Factors.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default teachers;
