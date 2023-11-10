import printDtails from "../index.json";
import CustomTab from "../../../../../components/Tabs";
import ImagePhase from "../../imagePhase";
const ImageTabs = () => {
  const getTabs = () => {
    const tabs = printDtails.printDetails.reduce((acc, print, idx) => {
      acc.push({
        label: `Print ${idx + 1}`,
        Component: <ImagePhase />,
      });
      return acc;
    }, []);
    return tabs;
  };
  return <CustomTab tabs={getTabs()} />;
};

export default ImageTabs;
