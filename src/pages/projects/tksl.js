import React from "react";
import Layout from "../../components/Layout";

function tksl() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <h1 className="px-3 py-1 header-lgradient rounded">
              <b>Tashi Khangmar Samdrub Ling</b>
            </h1>
            <div className="pt-3"></div>
          </div>
          <div className="row">
            <div className="col-12 m-0 p-0">
              <p>Under the spiritual patronage of Khensur Rinpoche Geshe Tashi Tsering, TKSL is a school of Buddhist Science with an emphasis on philosophical teachings relating to the nature and workings of consciousness/cognition; the way things exist; and the difference between how they exist and how they appear to us.</p>
              <p>The purpose and benefit of the study is to help us understand how our minds work so that we can bring them under our control and thereby lead happier lives.</p>
              <div className="text-center">
                <iframe height="315" src="https://www.youtube.com/embed/rdw7ld1oFFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Khensur Rinpoche recently gave this short teaching on the importance of studying Mind and Mental Factors to students in Israel.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="border-top mx-4 my-3 py-0"></div>
            <div className="col-12 my-4 p-0">
              <div className="text-center float-md-end">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.64070854171!2d153.03328851615547!3d-27.449305922410073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9159eb7f3f651d%3A0xf9e38b8232e3f979!2s16%20Brookes%20St%2C%20Bowen%20Hills%20QLD%204006!5e0!3m2!1sen!2sau!4v1678277767152!5m2!1sen!2sau" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>

              <h5>
                <b>Contact us</b>
              </h5>
              <p>Find us at 16 Brookes Street, Bowen Hills, Brisbane</p>
              <h5>
                <b>Parking</b>
              </h5>
              <p>There is no on-site parking. </p>
              <p>There are commercial parking stations on O'Connell Terrace and the Brisbane Showgrounds, as well as on-street parking in the surrounding area. King Street Parking Station (off Machinery Street) currently has a special of three hours' free parking after 5pm on weekdays and all weekend.</p>
              <h5>
                <b>Public Transport</b>
              </h5>
              <p>The Bowen Hills Train Station and Royal Brisbane and Women's Hospital Bus Station are both only a few minutes walk away.</p>
              <h5>
                <b>Contact us</b>
              </h5>
              <table className="table table-borderless table-sm" style={{ whiteSpace: "nowrap", width: "1%" }}>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>E-mail:</td>
                    <td>tksl@goodfortunetrust.org</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>0415 157 339</td>
                  </tr>
                  <tr>
                    <td>Post:</td>
                    <td>P.O. Box 1227, Spring Hill, QLD 4004</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row">
              <div className="border-top mx-4 my-3 py-0"></div>
              <div className="col-12 mt-4 p-0"></div>
              <h5>
                <b>Upcoming Classes</b>
              </h5>
              <p></p>
              <div className="iframe-holder-loader" width="800">
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Australia%2FBrisbane&showPrint=0&showCalendars=0&showTz=0&showTitle=0&mode=AGENDA&src=MDEwYTk0MjBiNjE0M2Y0OTU0NWMxNjQyYzg4YzlkNThlOWRmMzllMzI1YTZkZjk2MTQ2MzhjNmIxNzdiYzBkNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00" width="800" height="600" frameborder="0" scrolling="no"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default tksl;
