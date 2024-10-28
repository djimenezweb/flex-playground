import { useRef, useState } from "react";
import { formatContainerCode } from "../../../utils/format-container-code";
import { formatItemsCode } from "../../../utils/format-items-code";
import { Clipboard, ClipboardCheck } from "lucide-react";
import Selector from "./Selector";
import Line from "./Line";

const Code = ({ flexContainerStyle, flexItems }) => {
  const [selection, setSelection] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef(null);

  const containerCode = formatContainerCode(flexContainerStyle);
  const { commonStyles, nthStyles } = formatItemsCode(flexItems);

  function handleSelect() {
    if (!selection) {
      window.getSelection().selectAllChildren(codeRef.current);
      setSelection(window.getSelection().toString());
    }
    if (selection) {
      window.getSelection().empty();
      setSelection("");
    }
  }

  async function copyTextToClipboard() {
    if (selection) {
      await navigator.clipboard.writeText(selection);
    } else {
      window.getSelection().selectAllChildren(codeRef.current);
      await navigator.clipboard.writeText(window.getSelection().toString());
    }
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <div className="code-wrapper">
      <button className="code__copy-button" onClick={copyTextToClipboard}>
        {isCopied ? <ClipboardCheck size={20} /> : <Clipboard size={20} />}
      </button>
      <pre className="vs-code-theme" onClick={handleSelect}>
        <code ref={codeRef}>
          <Selector selector=".flex-container">
            {Object.keys(containerCode).map((property) => (
              <Line
                key={property}
                property={property}
                value={containerCode[property]}
              />
            ))}
          </Selector>

          {Object.keys(commonStyles).length > 0 && (
            <Selector selector=".flex-item">
              {Object.keys(commonStyles).map((property) => (
                <Line
                  key={property}
                  property={property}
                  value={commonStyles[property]}
                />
              ))}
            </Selector>
          )}

          {nthStyles.map((nthChild, index) => {
            if (Object.keys(nthChild).length === 0) return null;

            return (
              <Selector
                key={index}
                selector={`.flex-item:nth-child(${index + 1})`}
              >
                {Object.keys(nthChild).map((property) => (
                  <Line
                    key={property}
                    property={property}
                    value={nthChild[property]}
                  />
                ))}
              </Selector>
            );
          })}
        </code>
      </pre>
    </div>
  );
};
export default Code;
