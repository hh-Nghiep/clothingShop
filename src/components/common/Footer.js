import React from "react";

export default function footer () {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="on">
            <div className="info pb --area">
              <div className="email mb">Email INFO@GOLDENBOXSTUDIO.COM</div>
              <div className="telephone mb">
                TEL <span>+84 979 872 809</span>{" "}
              </div>
            </div>
            <div className="contact pb --area">
              <div>If you have any questions, comments or</div>
              <div>
                suggestions, feel free to email us or send us a message.
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="ft">
        <div className="container">
          <div className="below">
            <div className="below__top">
              <div className="info --area">
                <div className="below__info mb">
                  <span>Address</span> 04 Bau Cat District Tan Binh Ho Chi Minh
                  City.
                </div>
              </div>
              <div className="contact --area">
                <div className="contact-left --ct">
                  <div className="contact-item">
                    <div>Your Name</div>
                    <input type="text" />
                  </div>

                  <div className="contact-item">
                    <div>Phone</div>
                    <input type="text" />
                  </div>

                  <div className="contact-item">
                    <div>Email</div>
                    <input type="text" />
                  </div>
                </div>

                <div className="contact-right --ct">
                  <div className="contact-item">
                    <div>Subject</div>
                    <input type="text" />
                  </div>

                  <div className="contact-item">
                    <div>Message</div>
                    <textarea name="" id="" cols="30" rows="2"></textarea>
                  </div>

                  <div className="contact-send">
                    <div>SEND</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="end">
              <img className="backtotop" src="img/arrow-footer.png" alt="" />
              <div>© 2018 GBOX STUDIO. All rights reserved</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
