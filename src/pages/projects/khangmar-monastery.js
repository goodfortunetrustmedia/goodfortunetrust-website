import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

function khangmarMonastery() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <h1 className="px-3 py-1 header-lgradient rounded">Khangmar Monastery</h1>
            <div className="pt-3"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0">
            <div className="float-sm-end text-center mx-3">
              <div className="d-flex flex-column gap-3">
                <span>
                  <StaticImage src="https://images.ctfassets.net/5p61221bq9gd/2OgTuMg6de6vNV0wSGc8Vp/e410b80989f2831df180b830b366fb7a/IMG_4364.jpg" alt="" className="img-thumbnail" placeholder="blurred" layout="constrained" width={300} />
                </span>
                <span>
                  <StaticImage src="https://images.ctfassets.net/5p61221bq9gd/xTgQlPAzpMKou8hHMA1UC/40f059e57d4f1b7e1092aa58c209e30d/10._Copying.jpg" alt="" className="img-thumbnail" placeholder="blurred" layout="constrained" width={300} />
                </span>
                <span>
                  <StaticImage src="https://images.ctfassets.net/5p61221bq9gd/2ZQYNr61vughxvylT2WehM/142ec25eff4f5a52bf3632f43d639d3d/Kmar_27.jpg" alt="" className="img-thumbnail" placeholder="blurred" layout="constrained" width={300} />
                </span>
                <span style={{ width: "300px" }}>For $35 a month or ($420 per year) you can sponsor a monk in Tibet</span>
              </div>
            </div>
            <h5 className="fw-bold">Rinpoche's Home Monastery</h5>
            <p>Our patron Khensur Rinpoche, Geshe Tashi Tsering joined his uncle and older brother at Khangmar Monastery when he was 7 years old, when there were more than 350 monks living there. The monastery was forcibly abandoned in the 1950s and finally re-established in 1984.</p>
            <p>While new monks have joined Khangmar Monastery in the last few years, the flow of monks from Tibet into India has also continued, as they make the dangerous journey to freedom in order to study and train in the traditional way at Sera Je and other Tibetan monasteries in India.</p>
            <h5 className="fw-bold">What we have achieved</h5>
            <p>Khangmar Monastery in eastern Tibet is a major focus of The Good Fortune Trust’s fundraising efforts. It is a small, very poor monastery in the countryside near the town of Kardze. Since 1959 the main building, housing the main temple and assembly hall, administrative area, and kitchen — the very heart of the monastery — had fallen into serious disrepair.</p>
            <p>However, over the last few years, the kindness and generosity of our benefactors has facilitated significant developments at the monastery.</p>
            <p>In 2005 classes in literacy and Tibetan grammar began in a dingy, cold storage area lit by a single bare bulb. In November 2007 this space was transformed into a proper classroom with furniture and adequate lighting.</p>
            <p>Since 2007 each monk has received a monthly allowance to cover his basic food requirements.</p>
            <p>Most recently we have helped the monastery rescue its dangerously dilapidated temple/assembly hall. The crumbling structure has been stabilised a reinforced, increased in size and and restored to its former glory with a reconstruction of two upper storeys which had collapsed during the years of its abandonment.</p>
            <p>This magnificent ancient building now stands as a symbol of the monastery and a testament to what can be achieved with some funding and a willing force of hard-working monks!</p>
            <h5 className="fw-bold">What we need</h5>
            <p>These monks at Khangmar Monastery need help for all their basic requirements such as food, clothing, books and medical treatment. They depend on help from local families, who are themselves quite poor. Our work to support the monks benefits the entire community.</p>
            <p>The Good Fortune Trust seeks the support of benefactors to provide money for simple daily necessities, the improvement of basic facilities and the development of structured education.</p>
            <p>Geshe Tashi Tsering hopes that a qualified teacher from Sera Je in India will soon be able to go to Tibet to teach at Khangmar and Jhilu Ritrek.</p>
            <p>The generous support of Western benefactors is needed to:</p>
            <ul>
              <li>offer meals to the monks at Khangmar Monastery</li>
              <li>make urgent repairs to monks’ houses</li>
              <li>build new houses to accommodate new monks</li>
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

export default khangmarMonastery;
