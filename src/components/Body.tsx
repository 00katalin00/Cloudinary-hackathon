import React, { useCallback } from 'react'

import { fill } from '@cloudinary/url-gen/actions/resize'
import { CloudinaryImage } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react'
import { sepia, grayscale } from '@cloudinary/url-gen/actions/effect'
import { improve } from '@cloudinary/url-gen/actions/adjust'
import { cutByImage } from '@cloudinary/url-gen/actions/reshape'
import { text } from '@cloudinary/url-gen/qualifiers/source'

import { useDropzone, FileWithPath } from 'react-dropzone';
import Dropzone from 'react-dropzone';

export default function Body () {

    const homeWallpaper = new CloudinaryImage('hackathon/site/home-wallpaper.jpeg', { cloudName: 'zhezevu' })
        .resize(fill().width(350).height(350));

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const files = acceptedFiles.map((file: FileWithPath) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));
    return (
        <main>
            <div>
                <div>
                    <AdvancedImage cldImg={homeWallpaper} />
                </div>
                <section className="DropContainer">
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                    <aside>
                        {files}
                    </aside>
                </section>
            </div>
        </main>
    )
}
// https://react-dropzone.js.org/

/*
const url = 'hackathon/paisaje4.jpeg';
    // const img = new CloudinaryImage('recipes/happy_dog', { cloudName: 'zhezevu' }).resize(fill().width(300).height(300))
    const original = new CloudinaryImage(url, { cloudName: 'zhezevu' })
        .resize(fill().width(700).height(500));
    const changed = new CloudinaryImage(url, { cloudName: 'zhezevu' })
        .resize(fill().width(700).height(500)).adjust(improve());

            <AdvancedImage cldImg={original} />
            <AdvancedImage cldImg={changed} />

*/