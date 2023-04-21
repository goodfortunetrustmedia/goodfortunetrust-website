import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

function index() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <h1 className="px-3 py-1 header-lgradient rounded">Projects</h1>
            <div className="pt-3"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0">
            <div className="float-sm-end text-center mx-3">
              <div className="d-flex flex-column gap-3">
                <span>
                  <StaticImage src="https://images.ctfassets.net/5p61221bq9gd/xTgQlPAzpMKou8hHMA1UC/40f059e57d4f1b7e1092aa58c209e30d/10._Copying.jpg" alt="" className="img-thumbnail" placeholder="blurred" layout="constrained" width={300} />
                </span>
                <span>
                  <StaticImage src="https://images.ctfassets.net/5p61221bq9gd/3Vm0yVWEaqNpMzatvTxwLR/e3a6ebfdbc002c58d83b2fa4dcd9faf1/JR_1.jpg" alt="" className="img-thumbnail" placeholder="blurred" layout="constrained" width={300} />
                </span>
                <span>
                  <StaticImage src="https://images.ctfassets.net/5p61221bq9gd/WxH66dRZRQdGIbQc0aO01/00435564cb261c1df046579009d12302/IMG_5015.jpg" alt="" className="img-thumbnail" placeholder="blurred" layout="constrained" width={300} />
                </span>
              </div>
            </div>
            <p>The Good Fortune Trust is rebuilding Khangmar monastery, a small and very poor monastery in eastern Tibet, and supporting the nuns in nearby Jhilu Ritrek nunnery.</p>
            <p>It also supports hundreds of monks studying the traditional monastic curriculum in the Sera Je monastery-in-exile in southern India.</p>
            <p>Our website highlights our main projects, and includes many beautiful photos taken in remote parts of Tibet. It tries to offer some insight into Tibetan Buddhism — in particular the lives of Tibetan (and Western) monks and nuns and the vital role that comprehensive study plays in the Gelug-pa tradition.</p>
            <p>The Good Fortune Trust is an initiative of students of Ven Geshe Tashi Tsering, a Tibetan lama who has been teaching Western students in south-east Queensland since 1990. It is supported by several hundred sponsors and benefactors around Australia. Many are Buddhists and students of Geshe Tashi Tsering while others may be neither but have sympathy for the plight of the Tibetan people and wish to help. </p>
            <p>The Good Fortune Trust is grateful for all the generous support it receives: both occasional and ongoing donations and the time cheerfully volunteered by the small team who manage the Trust’s activities. Our bank account details are here.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
