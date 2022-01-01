import line_header from '../img/line_header.png';

const RichMediaItem = (props) => {
  return (
    <div>
      <section className="welcome">
        <div className="container">
          <div className="welcome">
            <div className="welcome-text textbox">
              <div className="welcome--title">
                <span className="welcome--title-1">Welcom</span>
                <span className="welcome--title-1">To</span>
                <span className="welcome--title-2">GBOX STUDIOS</span>
              </div>
              <div className="welcome--text">
                <strong>GBOX STUDIOS</strong> aim is to create a full service
                offering clients the highest quality of work with a
                comprehensive understanding of modern production, our services
                include advertising, products, automotive, portraits, beauty,
                editorial photography and video production. Gbox brand mark was
                inspired by the brand name and the lens "-" a visual
                representation of our world, we aim to create powerful
                simplicity, all components are coherence based on a box. Gbox is
                based in Ho Chi Minh City, one of the most beautiful city in
                Vietnam.
              </div>
              <div className="welcome--line">
                <img src={require("../img/line-home.png")} alt="v" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tags tags-home">
        <div className="container">
          {/* tag */}
          <div className="tags-text">
            <div className="tag active">ALL</div>
            <div className="tag">FILM</div>
            <div className="tag">IMAGE</div>
          </div>

          <div className="post post_ALL active">
            {props.richMedia.map((item, index) => (
              <div className="post__item" key={index}>

                <div className="post__item-img">
                  <img src={item.img} alt="a" />
                </div>
                <h3 className="post__item-title">
                  <a href="/#">{item.title}</a>
                </h3>
                <p className="post__item-des">{item.clients}</p>
                <p className="post__item-des">{item.photograper}</p>
                <p className="post__item-des">{item.director}</p>
                
              </div>
            ))}
          </div>

          <div className="post post_FILM ">
            {props.richMedia.map((item, index) => (
              <div className="post__item" key={index}>
                <div className="post__item-img">
                  <img src={item.img} alt="a" />
                </div>
                <h3 className="post__item-title">
                  <a href="/#">{item.title}</a>
                </h3>
                <p className="post__item-des">{item.clients}</p>
                <p className="post__item-des">{item.photograper}</p>
                <p className="post__item-des">{item.director}</p>
                
              </div>
            ))}
          </div>

          <div className="post post_IMAGE ">
            {props.richMedia.map((item, index) => (
              <div className="post__item" key={index}>

                <div className="post__item-img">
                  <img src={item.img} alt="a" />
                </div>
                <h3 className="post__item-title">
                  <a href="/#">{item.title}</a>
                </h3>
                <p className="post__item-des">{item.clients}</p>
                <p className="post__item-des">{item.photograper}</p>
                <p className="post__item-des">{item.director}</p>
                
              </div>
            ))}
          </div>

          <div className="allworks"><a href="/work.html">ALL WORKS</a></div>
        </div>
      </section>

      <section className='line'>
            <div className="container">
                <div className="line"><img src={line_header} alt=""/></div>
            </div>
        </section>
    </div>
  );
};

export default RichMediaItem;
