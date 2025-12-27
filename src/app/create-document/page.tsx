// TODO: This component will have two different functions, 
// 1. Editor => to edit the Report
// 2. Preview => to preview the content of the Report

import Editor from "./editor";
import Preivewer from "./previewer";

const CreateDocument = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Editor />
      </div>
      <div className="col-span-10">
        <Preivewer />
      </div>
      Editor Component goes here
    </div>
  )
}

export default CreateDocument;
