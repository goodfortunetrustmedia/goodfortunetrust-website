import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

function jrNunnery() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <h1 className="px-3 py-1 header-lgradient rounded">Jhilu Ritrek Nunnery</h1>
            <div className="pt-3"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0">
            <div className="float-sm-end text-center mx-3">
              <div className="d-flex flex-column gap-3">
                <span>
                  <StaticImage src="https://images.ctfassets.net/5p61221bq9gd/75nsstg6lnYjipnSGpWzPg/08b539be3c7949eb4d235fe832f90f55/IMG_1447.jpg" alt="" className="img-thumbnail" placeholder="blurred" layout="constrained" width={300} />
                </span>
                <span style={{ width: "300px" }}>So little means so much</span>
                <span>
                  <StaticImage src="https://images.ctfassets.net/5p61221bq9gd/54kx2YFF4CDLEIULljZnpv/b5ab949c40988ee99b27355e5ec71e88/JR_4.jpg" alt="" className="img-thumbnail" placeholder="blurred" layout="constrained" width={300} />
                </span>
                <span style={{ width: "300px" }}>$35/month sponsors a Tibetan nun at Jhilu Ritrek nunnery in eastern Tibet</span>
              </div>
            </div>
            <p>Jhilu Ritrek Nunnery was established not far from Khangmar after the monastery was re-opened in 1984, with many of the nuns being related to monks at Khangmar.</p>
            <h5 className="fw-bold">Living conditions</h5>
            <p>Primitive is the only way to describe the living conditions of the nuns at Jhilu Ritrek; none of the things we can take for granted in the West exist adequately.</p>

            <p>These nuns need help for all their basic requirements such as food, clothing, books and medical treatment. They depend on help from local families, who are themselves quite poor. Our work to support the nuns benefits the entire community.</p>

            <p>The Good Fortune Trust seeks the support of benefactors to provide money for simple daily necessities, the improvement of basic facilities and the development of structured education.</p>

            <p>Khensur Rinpoche Geshe Tashi Tsering hopes that a qualified teacher from Sera Je in India will soon be able to go to Tibet to teach at Khangmar and Jhilu Ritrek.The generous support of Western benefactors is needed to</p>
            <ul>
              <li>offer meals to the nuns at Jhilu Ritrek</li>
              <li>make urgent repairs to nuns’ houses</li>
              <li>build new houses to accommodate new nuns</li>
              <li>upgrade electricity, water and sanitation</li>
              <li>provide texts and teachings as part of a comprehensive dharma education programme</li>
              <li>offer basic necessities such as clothing, bedding and texts</li>
              <li>enable nuns in need to access medical treatment and medicine</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default jrNunnery;
