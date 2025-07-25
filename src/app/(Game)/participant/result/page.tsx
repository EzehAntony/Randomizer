import GenerateButton from '@/components/buttons/GenerateButton';
import ShareButton from '@/components/buttons/ShareButton';
import { Header } from '@/components/Header';
import Participant from '@/components/Participant';



const Page = () =>
{
    return (
        <div className='h-screen w-full flex flex-col gap-[24px] '>
            <Header text={ "Result" } />

            <div className='px-4 h-[683px] flex flex-col justify-between '>
                <div className='flex flex-col w-full gap-[24px] '>
                    <div className='flex gap-[16px]'>
                        <h1 className='text-[18px] '>Selected Participants</h1>
                        <div className='flex gap-[8px]'>
                            <ShareButton />
                        </div>
                    </div>

                    <div className='flex gap-[16px] '>
                        <Participant name="Leye" />
                        <Participant name="Hack Sultan" />
                    </div>
                </div>

                <GenerateButton text="Select Again" />
            </div>
        </div>
    );
};

export default Page;