import React from 'react'
import { useEditorContext } from '../../../../context/CreateEditorContext';
import defaultbanner from '../../../../assets/imgs/blogbanner.png';
import BlockContent from './BlockContent';
import { Typography } from '@mui/material';

const PreivewSection = () => {
    let {
        blog: { title, banner, content, tags, categories, des, author, excerpt, visible, slug },
        setBlog,
        textEditor,
        setTextEditor,
      } = useEditorContext();
    const handleImageError = (e) => {
        let img = e.target;
    
        img.src = defaultbanner;
      };
  return (
    <div className='max-w-[550px] center'>
        <div className='mb-4'>
        <Typography variant='h5'>Settings</Typography>
      </div>
        <div className='w-full aspect-video rounded-lg overflow-hidden bg-grey mt-4'>
        <img src={banner} className='z-20' onError={handleImageError} />
        </div>
        <h1 className='text-4xl font-medium mt-2 leading-tight line-clamp-2'>{title}</h1>
        <p className='text-xl font-medium mt-2 leading-tight line-clamp-2'>{des}</p>
        <div className='my-12 font-gelasio'>{content.blocks.map((block, i) => {
            return <div key={i} className='my-4 md:my-8'>
                <BlockContent block={block} />
                </div>
        })}</div>

    </div>
  )
}

export default PreivewSection