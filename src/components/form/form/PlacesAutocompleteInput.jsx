import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import PropTypes from 'prop-types';
import Input from './Input';

function PlacesAutocompleteInput({ onSelectLocation, selectedLocation, type, ...props }) {
  const [value, setValue] = useState(selectedLocation ? selectedLocation.description : '');

  const onSelect = (address) => {
    setValue(address);
    onSelectLocation(address);
  };

  return (
    <PlacesAutocomplete
      value={value}
      onChange={setValue}
      onSelect={onSelect}
      highlightFirstSuggestions
      searchOptions={{
        types: [type],
        componentRestrictions: {
          country: 'de',
        },
      }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="relative flex flex-col w-full">
          <Input name="location" {...getInputProps()} {...props} />
          {loading || suggestions.length > 0 ? (
            <div className="absolute w-full shadow-lg rounded-lg mt-12 p-2 pin-t pin-l bg-white autocomplete-dropdown-container text-base">
              {loading && <div>Lädt...</div>}
              {suggestions.map((suggestion, idx) => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion)}
                    className={`p-2 ${idx !== 0 ? 'border-t border-gray-200' : ''} ${className}`}
                    style={style}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      )}
    </PlacesAutocomplete>
  );
}

PlacesAutocompleteInput.propTypes = {
  type: PropTypes.string,
  onSelectLocation: PropTypes.func.isRequired,
  selectedLocation: PropTypes.shape({
    description: PropTypes.string,
  }),
};

PlacesAutocompleteInput.defaultProps = {
  type: 'address',
  selectedLocation: null,
};

export default PlacesAutocompleteInput;
