import React, { useEffect, useState } from "react";
import Widget from "../Widget";
import { WidgetData } from "../../types/PropTypes";
import { Oval } from "react-loader-spinner";

const WidgetsSection = () => {
  const [widgetData, setWidgetData] = useState<WidgetData[]>([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_URL || "";

  useEffect(() => {
    fetchWidgets();
  }, []);

  const fetchWidgets = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWidgetData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching widgets:", error);
      setLoading(false);
    }
  };

  const handleDataChange = (value: WidgetData[]) => {
    setWidgetData(value);
  };

  return (
    <section className='widgetsSection'>
      {loading ? (
        <>
          <h3 className='widgetsSection__title'>Loading...</h3>
          <Oval
            visible={true}
            height="40"
            width="40"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass="widgetsSection__spinner"
          />
        </>
      ) : (
        <>
          <h3 className='widgetsSection__title'>Per product widgets</h3>
          <div className='widgetsSection__content'>
            {widgetData?.map((widget) => (
              <Widget
                key={widget.id}
                data={widget}
                widgetData={widgetData}
                handleDataChange={handleDataChange}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default WidgetsSection;
