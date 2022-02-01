import Weather from "./features/weather";
import { Layout, Row, Col } from 'antd';
import { ResetThemeLink, ThemeToggle, HomeLocationLink } from "@components";
import { useContext } from "react";
import { GeolocationContext, ThemeContext } from "@context";

const { Content } = Layout;

function App() {

  const { isThemeDark, resetThemePreference, isThemeSaved, toggleTheme } = useContext(ThemeContext)
  const { isHomeLocation, getWeartherForHome } = useContext(GeolocationContext)

  return (
    <Layout className={isThemeDark ? 'bg-black' : ''}>
      <Content style={{ margin: '24px 16px' }}>
        <Row justify="end">
          <Col>
            <ThemeToggle isThemeDark={isThemeDark} toggleTheme={toggleTheme} />
          </Col>
        </Row>

        {isThemeSaved &&
          <Row justify="end">
            <Col>
              <ResetThemeLink resetThemePref={resetThemePreference} />
            </Col>
          </Row>
        }

        {isHomeLocation &&
          <Row justify="end">
            <Col>
              <HomeLocationLink getWeartherForHome={getWeartherForHome} />
            </Col>
          </Row>
        }
        <Weather />
      </Content>
    </Layout>
  );
}

export default App;
