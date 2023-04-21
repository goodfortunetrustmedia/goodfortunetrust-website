import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";

const images = [
  "https://images.ctfassets.net/5p61221bq9gd/4292nTK8FfMOELyYaj1TwB/756a10e13c547498f7e885c7b2c9fca5/3166_crop.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/7nsA5W6FnMBpoldJF05H1K/9f9888e533fb325dde264f89eb37a1da/CRW_2162_RJ_tall_crop.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/2gbJwDobVWIiFDIiwhzTeV/5e06d88eab3680b99f41df0fec7eeb78/yes_IMG_3273_bigger_crop.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/5kDgQoN09oglyer31NWd2C/c40319d6e740ec87086e4cf01b9ad81e/CRW_5919_RJ_150_dpi_123_x_176.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/7FJfwf4xSLdtzDyJPFJSy2/08f95f8ac3aff273bb238fa3aa6019f8/IMG_2880.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/7dVMFORSuQhiZ8tW5c21hR/621e410c18981c759cad12d1b3a55298/IMG_2680.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/6tDkbYYgp4VnOgDkJHZtrI/f69907899b6fcf0e3db502fde7cdb9a8/IMG_2937.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/3rxyRqifWcEuaA3C8hP2Zh/0c8f4d1d1ed1af79ff109e4bd3603d19/IMG_9753_300dpi_123_x_176.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/54kx2YFF4CDLEIULljZnpv/b5ab949c40988ee99b27355e5ec71e88/JR_4.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/2OgTuMg6de6vNV0wSGc8Vp/e410b80989f2831df180b830b366fb7a/IMG_4364.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/4G1F91hHr1CCcsq13CD95P/a973d8db93b642e832e48477256cdb52/JR_5.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/1l5bDJqjEaUYYCc9Ma5Y1v/e133155a10fe4c986a2097b89e1daf37/KR_and_HHDL.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/2rPbJLOhJdaTHPmVqxRpYf/f59bf12fd3ec9886ee3e93a5b7e5bbbd/Sera_6.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/1zvg1tU2PfHH0rgPQCJuGF/68e0ea3b03d65c1c401c2b592e684c7c/Yes_IMG_7753_crop_2.jpg",
  "https://images.ctfassets.net/5p61221bq9gd/WxH66dRZRQdGIbQc0aO01/00435564cb261c1df046579009d12302/IMG_5015.jpg",
];

const IndexPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-row justify-content-center align-items-center gap-1 p-3 border-top border-bottom border-dark">
          <StaticImage src="../images/gft_logo.jpg" style={{ height: "80px", aspectRatio: "1" }}></StaticImage>
          <h2 className="text-copperplate">Good Fortune Trust</h2>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="float-md-end text-center">
              <div className="d-flex flex-column p-3">
                <span>
                  <StaticImage src="https://images.ctfassets.net/5p61221bq9gd/1THHhgqcs4elL17nR39dLc/7561d284b798db5e6d609203dd827597/gtt_prayer.png" className="img-thumbnail" placeholder="blurred" layout="constrained" height={500} alt="" />
                  <p className="text-center m-2">
                    <em>Khensur Rinpoche, Geshe Tashi Tsering</em>
                  </p>
                </span>
              </div>
            </div>
            <p>The Good Fortune Trust is an initiative of students of Khensur Rinpoche, Geshe Tashi Tsering, a Tibetan lama who has been teaching Western students in south-east Queensland since 1990. It is supported by several hundred sponsors and benefactors around Australia and overseas. Many are Buddhists and students of Khensur Rinpoche, while others may be neither, but have sympathy for the plight of the Tibetan people and wish to help.</p> <p>The Good Fortune Trust is rebuilding Khangmar monastery, a small and very poor monastery in eastern Tibet, and supporting the nuns in nearby Jhilu Ritrek nunnery. It also supports hundreds of monks studying the traditional monastic curriculum in the Sera Je monastery-in-exile in southern India.</p> <p>This website has news about the different projects managed by the Trust and well as many beautiful photos taken in remote parts of Tibet. It tries to offer some insight into Tibetan Buddhism - in particular the lives of Tibetan (and Western) monks and nuns - and the vital role that comprehensive study plays in the Gelug-pa tradition.</p> <p>The Good Fortune Trust is grateful for all the generous support it receives, through both occasional and ongoing donations, and the time cheerfully volunteered by the small team who manage the Trust's activities.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="my-4">
              <Gallery images={images} width={200} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Good Fortune Trust</title>;
