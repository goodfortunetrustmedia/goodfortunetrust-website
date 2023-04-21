import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";

function index() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="px-3 py-1 header-lgradient rounded">Donate</h1>
            <div className="pt-3"></div>
            <div className="float-sm-end text-center">
              <div className="d-flex flex-column gap-3">
                <span>
                  <StaticImage src="https://images.ctfassets.net/5p61221bq9gd/WxH66dRZRQdGIbQc0aO01/00435564cb261c1df046579009d12302/IMG_5015.jpg" className="img-thumbnail" placeholder="blurred" layout="constrained" width={300} alt="" />
                </span>
                <span>
                  <StaticImage src="https://images.ctfassets.net/5p61221bq9gd/54kx2YFF4CDLEIULljZnpv/b5ab949c40988ee99b27355e5ec71e88/JR_4.jpg" className="img-thumbnail" placeholder="blurred" layout="constrained" width={300} alt="" />
                </span>
              </div>
            </div>

            <p>The Good Fortune Trust invites you to support the Tibetan nuns and monks from the Khangmar valley region of Eastern Tibet where Geshe Tashi Tsering grew up. Whatever assistance you can offer will make a big and immediate difference to the simple lives of these sincere Buddhist practitioners.</p>
            <p>We welcome ongoing sponsorship or one-off donations. Thank you!</p>
            <ul>
              <li>
                By cheque, made out to the Good Fortune Trust and post to:
                <br />
                <br />
                P.O. Box 1227 <br />
                Spring Hill, QLD 4004 <br />
                Australia
              </li>
            </ul>
            <ul>
              <li>
                By direct deposit to the Good Fortune Trust bank account:
                <br />
                <br />
                Bank - Westpac, Nambour branch <br />
                BSB and account number - 034-204 259677
              </li>
            </ul>
            <p>Please email us so we can check your gift is received. </p>
            <p>Please let us know if you would like your offerings to be used for a specific purpose. Otherwise, we will use it in the area of greatest need. </p>
            <p>We would like to know your name and contact details so that you can be included in the prayers for benefactors and so we can keep in touch. If you wish your offering to remain anonymous, please let us know and we will protect your privacy. </p>
            <br></br>
            <h5>
              <b>Ongoing Sponsorship</b>
            </h5>
            <ul>
              <li>$35/month sponsors a Tibetan monk at Khangmar monastery in eastern Tibet</li>
              <li>$35/month sponsors a Tibetan nun at Jhilu Ritrek nunnery in eastern Tibet</li>
              <li>$10/month sponsors a Tibetan monk studying at Sera Je monastery in India</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
