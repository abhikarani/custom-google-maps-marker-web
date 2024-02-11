import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./map.css";
import download from './download.png';
import brown from './BROWN Y SUGAR.png'
import kcup from './download.png'
import cup from './download.png'
import hundreds from './download.png'
import kcdown from './download.png'
import mb from './download.png'
import nestle from './download.png'
import zaitoon from './download.png'
import sukyu from './download.png'
import frozen from './download.png'

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'enterapikey',
  });
  const center = useMemo(() => ({ lat: 12.96850, lng: 79.155883 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={16}>

            
            <Marker 
              position={{lat:16.968796, lng: 79.155922}}
              icon={{
                url: mb,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
             <Marker 
              position={{lat:21.968578, lng: 79.156529}}
              icon={{
                url: kcup,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:13.958363, lng: 50.157047}}
              icon={{
                url: kcdown,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />

            <Marker 
              position={{lat:22.568018, lng: 19.157194}}
              icon={{
                url: download,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:32.970456, lng: 72.155486}}
              icon={{
                url: download,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:14.970927, lng: 39.157461}}
              icon={{
                url: download,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:17.969686, lng: 43.196946}}
              icon={{
                url: nestle,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker
              position={{lat:42.969530, lng: 504.57910}}
              icon={{
                url: download,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker
              position={{lat:32.970188,lng:  69.158842 }}
              icon={{
                url: download,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:22.970946,lng: 79.158343}}
              icon={{
                url: download,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
             <Marker 
              position={{lat:91.920600,  lng: 19.151225}}
              icon={{
                url: download,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:50.971562, lng: 34.162621}}
              icon={{
                url: download,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:52.971345, lng: 59.163120}}
              icon={{
                url: download,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:62.970865, lng: 71.163730}}
              icon={{
                url: download,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:32.271796, lng: 63.764564}}
              icon={{
                url: download,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
             <Marker
              position={{lat:12.250050, lng: 9.156947}}
              icon={{
                url: download,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:12.950953, lng: 79.155928}}
              icon={{
                url: frozen,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:10.965021, lng: 19.158383}}
              icon={{
                url: download,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:22.930664, lng: 17.618180}}
              icon={{
                url: brown,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
      
            <Marker 
              position={{lat:22.928665,lng: 99.159980}}
              icon={{
                url: cup,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:2.950284,lng:  9.139092,}}
              icon={{
                url: hundreds,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
           
            <Marker 
              position={{lat:123.968037, lng: 791.50331}}
              icon={{
                url: zaitoon,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />
            <Marker 
              position={{lat:121.971436, lng:  692.16502,}}
              icon={{
                url: sukyu,
                scaledSize: new window.google.maps.Size(50, 50), // Set the desired size
              }}
            />

          </GoogleMap>
      )}


    </div>
  );
};

export default Map;