import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Text } from 'components/atoms/text';
import { Button } from 'components/atoms/button';
import { useDropzone } from 'react-dropzone';
import { useFormikContext } from 'formik';
import { Image } from 'components/atoms/image';
import { Icon } from 'components/atoms/icon';
import cloud from 'assets/images/icon/icon-backgroundCover.svg';

type Modifier = 'foo' | 'bar';

interface Props {
  modifiers?: Modifier | Modifier[];
  name: string;
  setTouched?: () => void;
}

export const FileInput: React.FC<Props> = props => {
  const { setFieldValue, setErrors, errors } = useFormikContext();
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: '.png, .gif, .webp, .mp4, .mp3, .jpeg',
    noClick: true,
    noKeyboard: true,
    maxSize: 100428800,
    onDrop: acceptedFiles => {
      props.setTouched && props.setTouched();
      acceptedFiles.length && setFieldValue(props.name, acceptedFiles[0]);
    },
    onDropRejected: fileRejections => {
      const errorMessage =
        fileRejections[0]?.errors[0]?.message.replace(/ \d+ /, ' 100 ').replace(' bytes', 'mb') ||
        'Invalid File Format.';
      setErrors({ ...errors, [props.name]: errorMessage });
    },
  });

  return (
    <div  className={mapModifiers('a-fileinput', props.modifiers)} {...getRootProps()}>
      <button className="a-fileinput_button" onClick={open}>
      <Image src={cloud} alt="drag and drop" />
      <div className="a-fileinput_handle">
        <Button modifiers="asLink">
        <Icon modifiers={['small','middle']} iconName="plus" />
        </Button>
      </div>
      <input {...getInputProps()} className="a-fileinput_input" name={props.name} type="file" />
      </button>
    </div>
  );
};

export default hot(FileInput);
