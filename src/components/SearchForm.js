import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const SearchForm = () => {
    const { state: { name, recording, locations, destination }, 
        startRecording, 
        stopRecording, 
        changeName 
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return (
        <>

            <Spacer>
            <Input 
                value={destination}
                onChangeText={changeName} 
                placeholder="Destination" 
            />
            </Spacer>

            <Spacer>
            {recording ? (
                <Button title="Search" onPress={stopRecording} />  
            ) : (  
                <Button title="Start Recording" onPress={startRecording} />
            )}
            </Spacer>
            {/* <Spacer>
                    <Input 
                    value={name}
                    onChangeText={changeName} 
                    placeholder="Enter name" 
                />
            </Spacer> */}
            {/* <Spacer>
            {recording ? (
                <Button title="Stop" onPress={stopRecording} />  
            ) : (  
                <Button title="Start Recording" onPress={startRecording} />
            )}
            </Spacer>
            <Spacer>
            {!recording && locations.length ? (
                <Button title="Save Recording" onPress={saveTrack} />
            ) : null}
            </Spacer> */}
        </>
    );
};

export default SearchForm;