import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
    const { state: { name, recording, locations }, 
        startRecording, 
        stopRecording, 
        changeName 
    } = useContext(LocationContext);

    console.log(locations.length);

    return <>
        <Spacer>
            <Input onChangeText={changeName} placeholder="Enter name" />
        </Spacer>

        
        {recording 
            ? <Spacer>
                <Button title="Stop" onPress={stopRecording} />
            </Spacer>
            : <Spacer>
                <Button title="Start Recording" onPress={startRecording} />
            </Spacer>
        }
        
    </>
};

export default TrackForm;