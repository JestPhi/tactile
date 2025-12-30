import "../styles/util.css";
import ScrollView from "./index";

export const variants = {
  default: (
    <ScrollView>
      <div className="p-16">
        <h2>Scrollable Content</h2>
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i} className="mb-8">
            Item {i + 1}: This is a scrollable list item
          </p>
        ))}
      </div>
    </ScrollView>
  ),

  withCards: (
    <ScrollView>
      <div className="p-16">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="mb-16 p-16 border-1 border-radius-8 bg-white">
            <h3 className="mb-8">Card {i + 1}</h3>
            <p>This is a card with some content inside a scrollable view.</p>
          </div>
        ))}
      </div>
    </ScrollView>
  ),

  withImages: (
    <ScrollView>
      <div className="p-16">
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className="mb-16">
            <div
              style={{
                height: "200px",
                background: `linear-gradient(135deg, #667eea ${
                  i * 5
                }%, #764ba2 100%)`,
                borderRadius: "8px",
                marginBottom: "8px",
              }}
            />
            <p className="text-center">Image {i + 1}</p>
          </div>
        ))}
      </div>
    </ScrollView>
  ),

  withGrid: (
    <ScrollView>
      <div className="p-16">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="p-16 border-1 border-radius-8 bg-white text-center"
            >
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  background: `hsl(${i * 12}, 70%, 60%)`,
                  borderRadius: "4px",
                  marginBottom: "8px",
                }}
              />
              <span>Item {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollView>
  ),

  withLongText: (
    <ScrollView>
      <div className="p-16">
        <h1 className="mb-16">Long Article</h1>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="mb-16">
            <h2 className="mb-8">Section {i + 1}</h2>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        ))}
      </div>
    </ScrollView>
  ),
};
