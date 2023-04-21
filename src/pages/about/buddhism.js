import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

function buddhism() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <h1 className="px-3 py-1 header-lgradient rounded">Tibetan Buddhism</h1>
            <div className="pt-3"></div>

            <div className="float-md-end text-center">
              <div className="d-flex flex-column p-3 gap-1">
                <img src="https://images.ctfassets.net/5p61221bq9gd/2rPbJLOhJdaTHPmVqxRpYf/f59bf12fd3ec9886ee3e93a5b7e5bbbd/Sera_6.jpg" className="img-fluid" style={{ width: "300px" }} alt="" />
                <img src="https://images.ctfassets.net/5p61221bq9gd/WxH66dRZRQdGIbQc0aO01/00435564cb261c1df046579009d12302/IMG_5015.jpg" className="img-fluid" style={{ width: "300px" }} alt="" />
                <img src="https://images.ctfassets.net/5p61221bq9gd/7dVMFORSuQhiZ8tW5c21hR/621e410c18981c759cad12d1b3a55298/IMG_2680.jpg" className="img-fluid" style={{ width: "300px" }} alt="" />
              </div>
            </div>

            <p>The Gelug tradition is the most recently established of the four schools of Tibetan Buddhism. It was founded early in the 15th century by Lama Tsong Khapa, a great Tibetan master and reformer who did much to bring about a second blossoming of the dharma in Tibet. </p>
            <p>The Gelug tradition is characterised by its emphasis on monasticism and scholasticism (although not at the expense of practice and retreat, as is sometimes wrongly believed). In the great monastic universities of old Tibet, extensive programmes of study and practice were developed. The most capable monks, after several decades of concerted effort, would be awarded their geshe degree. </p>
            <p>This tradition has been restored in the Tibetan monasteries re-established in India following the effects of the Chinese Cultural Revolution in Tibet. From Sera, Ganden and Drepung, highly qualified teachers have travelled throughout the world to share the dharma. Thus, while lay teachers are common in other traditions, most Gelug teachers are monks.</p>
            <br />
            <h5>
              <b>The path to ordination</b>
            </h5>
            <p>To be ordained as a monk or nun in the Tibetan Buddhist tradition, one must receive permission from a qualified teacher. The form of the ordination ceremony and the vows taken by monastics can be traced through an unbroken lineage all the way back to the historical Buddha. Taking ordination is a life-time commitment, a way of freeing oneself from too many worldly concerns in order to devote oneself to the study and practice of Buddhist teachings. </p>
            <p>Monasticism was common in old Tibet — some sources suggest as many as one adult man in three was a monk. Despite the events of the past half century, nuns and monks are still respected and valued in Tibet. Every year, many children and young people make the arduous journey from Tibet to India so that they may join a monastic institution where a comprehensive course of study is available.</p>
            <br />
            <h5>
              <b>Opportunities for nuns</b>
            </h5>
            <p>It was traditionally less common for women to ordain and harder for nuns to receive teachings and engage in extensive study. This is changing and His Holiness the Dalai Lama has offered his encouragement and support of nuns, such as those at Jangchub Choeling, who are pursuing a traditional course of study. It is possible that the first nuns will be ready to face their geshe examinations in the next few years.</p>
            <p>Western nuns ordained in the Gelug tradition are the backbone of the Buddhist Studies Programme (BSP) taught by Geshe Tashi Tsering at Chenrezig Institute. This is a rare opportunity to hear in English extensive teachings on the topics of the monastic curriculum.</p>
            <br />
            <h5>
              <b>Western monks and nuns</b>
            </h5>
            <p>Western monks and nuns who have ordained in the Tibetan tradition are still few in number. They are an object of curious attention from both Tibetans and people in their own cultures! Tibetan lamas who are willing to ordain Westerns are still quite rare.</p>
            <p>Western monks and nuns must be able to support themselves financially. Most do not have the opportunity to live in community with other monks or nuns as monastic centres are exceedingly rare in the West. The Chenrezig Nuns’ Community in Australia is remarkable for its size and longevity: it is currently home to approximately 20 nuns.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default buddhism;
