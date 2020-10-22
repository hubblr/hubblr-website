import React from 'react';
import PropTypes from 'prop-types';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { swalError } from '../../util/sweetAlert';
import { getZipCode, getCity, getStreet, validateGeocodeResult } from '../../util/googlePlaces';
import PlacesAutocompleteInput from './PlacesAutocompleteInput';

function PatientAddressInput({ location, setLocation, className }) {
  const setNewLocation = async (address) => {
    try {
      const geocodeResults = await geocodeByAddress(address);
      if (geocodeResults.length > 0) {
        const [geocodeResult] = geocodeResults;

        const missingComponents = validateGeocodeResult(geocodeResult);
        if (missingComponents.length > 0) {
          swalError({
            title: 'Unvollständige Adresse',
            text: `Die ausgewählte Adresse ist leider unvollständig. Folgende Informationen fehlen: ${missingComponents.join(
              ', '
            )}`,
          });
          return;
        }

        const zipCode = getZipCode(geocodeResult);
        const city = getCity(geocodeResult);
        const street = getStreet(geocodeResult);
        const { lat: latitude, lng: longitude } = await getLatLng(geocodeResult);

        setLocation({
          ...geocodeResult,
          street,
          zip: zipCode,
          city,
          id: geocodeResult.place_id,
          description: address,
          latitude: latitude ? latitude.toPrecision(7) : null,
          longitude: longitude ? longitude.toPrecision(7) : null,
        });
      }
    } catch (e) {
      swalError({
        title: 'Fehler',
        text: 'Beim Suchen der Adresse ist leider ein Fehler aufgetreten.',
      });
    }
  };

  return (
    <div className={`relative flex flex-row w-full text-2xl mt-2 z-10 ${className}`}>
      <PlacesAutocompleteInput
        selectedLocation={location}
        onSelectLocation={setNewLocation}
        placeholder="Ihre Adresse"
      />
    </div>
  );
}

PatientAddressInput.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  setLocation: PropTypes.func.isRequired,
  className: PropTypes.string,
};

PatientAddressInput.defaultProps = {
  location: null,
  className: '',
};

export default PatientAddressInput;
