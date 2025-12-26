import "../styles/util.css";
import Bar from "./index";

export const variants = {
  default: (
    <Bar>
      <div className="p-16">Default Bar</div>
    </Bar>
  ),

  navigation: (
    <Bar role="navigation" aria-label="Main navigation">
      <div className="pl-16 font-semibold">Logo</div>
      <div className="flex gap-16 ml-auto pr-16">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </Bar>
  ),

  toolbar: (
    <Bar
      role="toolbar"
      aria-label="Document actions"
      className="border-bottom-1"
    >
      <button className="p-8 pl-16 pr-16">Save</button>
      <button className="p-8 pl-16 pr-16">Cancel</button>
      <div className="ml-auto pr-16">
        <button>⋮</button>
      </div>
    </Bar>
  ),

  statusBar: (
    <Bar className="background-primary pl-16 pr-16">
      <span>ℹ️</span>
      <span className="ml-8">Changes saved successfully</span>
    </Bar>
  ),

  centeredContent: (
    <Bar className="justify-center items-center">
      <h1 className="text-xl font-semibold m-0">Page Title</h1>
    </Bar>
  ),

  spaceBetween: (
    <Bar className="justify-between items-center pl-16 pr-16">
      <button>← Back</button>
      <span className="font-semibold">Settings</span>
      <button>Save</button>
    </Bar>
  ),
};
