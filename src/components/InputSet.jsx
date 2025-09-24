import "../styles/InputSet.css";

function formatLabel(field) {
  return field
    .replace(/([A-Z])/g, " $1") // insert space before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // capitalize first letter
}

function InputSet({ index, data, onChange, onRemove }) {
  return (
    <div className="input-collection">
      {onRemove && index > 0 && (
        <button
          type="button"
          className="remove-button"
          onClick={() => onRemove(index)}
        >
          X
        </button>
      )}

      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="field">
          <label>{formatLabel(key)}</label>
          {key.toLowerCase().includes("description") ? (
            <textarea
              placeholder={key}
              value={value}
              onChange={(e) => onChange(index, key, e.target.value)}
            />
          ) : key.toLowerCase().includes("file") ? (
            <input
              type="file"
              placeholder={key}
              onChange={(e) => onChange(index, key, e.target.files[0])}
            />
          ) : key.toLowerCase().includes("date") ? (
            <input
              type="date"
              placeholder={key}
              value={value}
              onChange={(e) => onChange(index, key, e.target.value)}
            />
          ) : key.toLocaleLowerCase().includes("percentage") ? (
            <>
              <input
                type="range"
                min="0"
                max="100"
                placeholder={key}
                value={value}
                onChange={(e) => onChange(index, key, e.target.value)}
              />
              <output>{value + "%"}</output>
            </>
          ) : (
            <input
              type="text"
              placeholder={key}
              value={value}
              onChange={(e) => onChange(index, key, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
}
export default InputSet;
