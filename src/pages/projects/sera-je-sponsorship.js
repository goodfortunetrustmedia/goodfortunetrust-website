import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

function seraJeSponsorship() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <h1 className="px-3 py-1 header-lgradient rounded">Monks at Sera Je</h1>
            <div className="pt-3"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0">
            <div className="float-sm-end text-center mx-3">
              <div className="d-flex flex-column gap-3">
                <span>
                  <StaticImage src="https://images.ctfassets.net/5p61221bq9gd/4oZcdxdmhj8ta49uhkUtbB/0290036cdb22db4b6b24909185019bf0/Kmar_8.jpg" alt="" className="img-thumbnail" placeholder="blurred" layout="constrained" width={300} />
                </span>
                <span style={{ width: "300px" }}> $10 a month ($120 a year) sponsors a Tibetan monk at Sera Je Monastery</span>
                <span>
                  <StaticImage src="https://images.ctfassets.net/5p61221bq9gd/16aB3dnbDW0Rb1sHJsE7pB/b0f5f8bc1884c385a345461af234f043/Sera_1.jpg" alt="" className="img-thumbnail" placeholder="blurred" layout="constrained" width={300} />
                </span>
              </div>
            </div>
            <h5 className="fw-bold">The 12-5 Sponsorship Programme</h5>
            <p>For many years we have been providing sponsorship to monks at Sera Je Monastery in India. Many of the monks we sponsor are from Khangmar Monastery and all come originally from Kardze.</p>
            <p>The programme covers 250 monks who belong to one of a dozen houses. These houses are headed by a small group of geshes who are all from the same area of Eastern Tibet and who were in the same class at Sera Je in Lhasa. They made the journey into exile in India together in 1959, lived at Buxor refuge camp and were among the first monks to re-establish Sera Je in Karnataka, in southern India. Each has made considerable contributions to the monastery in his own way.</p>
            <p>Khensur Rinpoche and Geshe Lozang Dorje have headed up House 12, with new monks continuing to flood into Sera Je, creating a pressing need for accommodation. Despite all the building work, there is still not nearly enough room for all the monks associated with House 12; the remainder live in rooms above the Tehor Khangtzen assembly hall.</p>
            <p>Since 2007 each monk has received a monthly allowance to cover his basic food requirements. We have also been able to fund critical improvements to houses at Sera Je, such as installing solar lighting to help compensate for the extremely unreliable electricity supply.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default seraJeSponsorship;
