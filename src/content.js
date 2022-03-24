import "./components/reading.js";
import "./components/chart.js";
import Popup from "reactjs-popup";
import "./index.css";

function Content() {
  return (
    <article
      className="bg-very-light-grey p3 flex-auto overflow-auto "
      data-testid="content"
    >
      <h1 className="regular darkgray line-height-1 mb3">Energy consumption</h1>
      <section className="mb3">
        <button
          className="
              h5
              inline-block
              shadow-2
              pl2
              pr2
              pt1
              pb1
              roundedMore
              border-grey
              bg-blue
              white
              bold
            "
        >
          Last 30 days
        </button>
      </section>
      <section className="chartHeight mb3">
        <canvas id="usageChart"></canvas>
      </section>
      <section>
        <div className="modalArea">
          <Popup
            trigger={<button className="button"> Open Modal </button>}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Modal Title </div>
                <div className="content">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <Popup
                    trigger={<button className="button"> Trigger </button>}
                    position="top center"
                    nested
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Beatae magni omnis delectus nemo, maxime molestiae dolorem
                      numquam mollitia, voluptate ea, accusamus excepturi
                      deleniti ratione sapiente! Laudantium, aperiam doloribus.
                      Odit, aut.
                    </span>
                  </Popup>
                  <button
                    className="button"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </section>
    </article>
  );
}

export default Content;
