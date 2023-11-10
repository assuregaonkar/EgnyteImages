import printDtails from "../index.json";
import GraphCarousel from "../../graphCarousel";
import CustomTab from "../../../../../components/Tabs";

const GraphTabs = () => {
  const getTabs = () => {
    const tabs = printDtails.printDetails.reduce((acc, print, idx) => {
      acc.push({
        label: `Print ${idx + 1}`,
        Component: <GraphCarousel />,
      });
      return acc;
    }, []);
    return tabs;
  };
  return <CustomTab tabs={getTabs()} />;
};

export default GraphTabs;
