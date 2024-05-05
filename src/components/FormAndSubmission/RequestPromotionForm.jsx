import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const validationSchema = Yup.object({
    eventName: Yup.string().required('This field is required.'),
    dateTime: Yup.string().required('This field is required.'),
    nameAddress: Yup.string().required('This field is required.'),
    name: Yup.string().required('This field is required.'),
    email: Yup.string().email().required('Please enter a valid email'),
    phoneNumber: Yup.number().min(440000000000).max(449999999999).required('Please enter a valid phone number'),
    participantType: Yup.string().required('You must select one'),
    eventType: Yup.array().required('At least one checkbox is required'),
    musicGenre: Yup.array().required('At least one checkbox is required')
});

const initialValues = {
    eventName: '',
            dateTime: '',
            nameAddress: '',
            eventDescription: '',
            name: '',
            email: '',
            phoneNumber: '',
            participantType: '',
            eventType: [],
            musicGenre: [],
            instruments: [],
            additionalInfo: '',
};

const onSubmit=async (values) => {
    await sleep (500);
    alert(JSON.stringify(values, null, 2));
};

const RequestPromotionForm = () => {
    return (
        <div>
            <h1 className=' text-fuchsia-800 pl-10 pt-5 text-3xl font-semibold tracking-tight leading-[72px] max-md:pl-5 max-md:pt-5 max-md:max-w-full max-md:text-2xl'>Promote yourself or your event with us</h1>
            <h3 className='self-center mt-3 text-2xl font-medium tracking-tight leading-7 max-md:max-w-full pl-10 pr-10'>To help us promote your studio or event, please take a few moments to file out our Request Promotion Form. The more information you provide, the better we can promote you.</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                await onSubmit(values);
                resetForm();
                }}
            >
                {({ values }) => (
                    <Form>
                        <h3 className='mt-12 text-2xl font-semibold leading-9 max-md:mt-10 max-md:max-w-full pl-10'>Event Details</h3>
                        <div className='flex flex-1 gap-3.5 max-md:flex-wrap pl-10 pr-10'>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="eventName" className='my-auto'>Event/Studio Name:</label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[45px] w-[366px]">
                                <Field id="eventName" name="eventName" placeholder="My Event" />
                                <ErrorMessage name="eventName" component="div" className='text-red-600' />
                            </div>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="dateTime" className='my-auto'>Date and Time:</label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[45px] w-[366px]">
                                <Field id="dateTime" name="dateTime" placeholder="DD-MM-YYYY at 12:00am" />
                                <ErrorMessage name="dateTime" component="div" className='text-red-600' />
                            </div>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="nameAddress" className='my-auto'>Venue/Studio Name and Address:</label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[45px] w-[366px]">
                                <Field id="nameAddress" name="nameAddress" placeholder="Insert Here" />
                                <ErrorMessage name="nameAddress" component="div" className='text-red-600' />
                            </div>
                        </div>
                    
                        <div className='flex flex-1 gap-3.5 max-md:flex-wrap pl-10 pr-10 pt-10'>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="eventDescription" className='my-auto'>Description of the Event:</label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[90px] w-[922px]">
                                <Field id="eventDescription" name="eventDescription" placeholder="Insert Here" />
                            </div>
                        </div>

                        <h3 className='mt-12 text-2xl font-semibold leading-9 max-md:mt-10 max-md:max-w-full pl-10'>Contact Information</h3>
                        <div className='flex flex-1 gap-3.5 max-md:flex-wrap pl-10 pr-10'>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="name" className='my-auto'>Name</label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[45px] w-[366px]">
                                <Field id="name" name="name" placeholder="Jane Doe" />
                                <ErrorMessage name="name" component="div" className='text-red-600' />
                            </div>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="email" className='my-auto'>Email</label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[45px] w-[366px]">
                                <Field id="email" name="email" placeholder="jane@acme.com" type="email" />
                                <ErrorMessage name="email" component="div" className='text-red-600' />
                            </div>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="phoneNumber" className='my-auto'>Phone Number</label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[45px] w-[366px]">
                                <Field id="phoneNumber" name="phoneNumber" placeholder="+44 00000 00000" />
                                <ErrorMessage name="phoneNumber" component="div" className='text-red-600' />
                            </div>
                        </div>

                        <div id="Participant Type" className="mt-12 text-2xl font-semibold leading-9 max-md:mt-10 max-md:max-w-full pl-10">Type of Participant</div>
                            <div role="group" aria-labelledby="participant-type">
                                <p className='pl-10 self-start mt-2 text-xl font-medium leading-8 text-black max-md:ml-1'>I am a:</p>
                                <div className="mt-3 max-md:max-w-full flex max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col max-md:ml-0 max-md:w-full leading-8 max-md:mt-10">
                                        <div className="flex gap-2.5 ml-10 max-md:ml-2.5">
                                            <label>
                                                <Field type="radio" name="participantType" value="1" />
                                                Event Organizer
                                            </label>
                                            <label>
                                                <Field type="radio" name="participantType" value="2" />
                                                Performer/Band
                                            </label>
                                            <label>
                                                <Field type="radio" name="participantType" value="3" />
                                                Music Teacher
                                            </label>
                                            <ErrorMessage name="participantType" component="div" className='text-red-600' /> 
                                        </div>
                                    </div>
                                </div>   
                            </div>
                            
                        <div id="Event Type" className="mt-8 text-2xl font-semibold leading-9 max-md:mt-10 max-md:max-w-full pl-10">Type of Event</div>
                            <div role="group" aria-labelledby="event-type">
                                <div className="mt-3 max-md:max-w-full flex gap-4 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col max-md:ml-0 max-md:w-full leading-8 max-md:mt-10">
                                        <div className="flex gap-2.5 ml-10 max-md:ml-2.5">
                                            <label>
                                                <Field type="checkbox" name="eventType" value="1" />
                                                Concert/Show
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="2" />
                                                Festival
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="3" />
                                                Recital
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="4" />
                                                Opera/Musical
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="5" />
                                                Open Mic Night
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="6" />
                                                Competition
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="7" />
                                                Workshop
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="8" />
                                                Masterclass
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="9" />
                                                Conference
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="10" />
                                                Private Lesson
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="11" />
                                                Group Lesson
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="12" />
                                                Music Theory Class
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="13" />
                                                Other
                                            </label>
                                        </div>
                                        <ErrorMessage name="eventType" component="div" className='text-red-600' />
                                    </div>
                                </div>
                            </div>

                        <div id="Music Genre" className="mt-8 text-2xl font-semibold leading-9 max-md:mt-10 max-md:max-w-full pl-10">Genre of Music</div>
                            <div role="group" aria-labelledby="music-genre">
                                <div className="mt-3 max-md:max-w-full flex gap-4 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col max-md:ml-0 max-md:w-full leading-8 max-md:mt-10">
                                        <div className="flex gap-2.5 ml-10 max-md:ml-2.5">
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="1" />
                                                Pop
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="2" />
                                                Rock
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="3" />
                                                Electronic/Dance
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="4" />
                                                Indie
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="5" />
                                                Indie
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="6" />
                                                Hip Hop/Rap
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="7" />
                                                R&B/Soul
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="8" />
                                                Folk
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="9" />
                                                Jazz
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="10" />
                                                Classical
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="11" />
                                                Reggae
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="12" />
                                                Salsa
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="13" />
                                                Afrobeat
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="14" />
                                                Bollywood
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="15" />
                                                Flamenco
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="16" />
                                                Celtic
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="17" />
                                                Bhangra
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="18" />
                                                Other
                                            </label>
                                        </div>
                                        <ErrorMessage name="musicGenre" component="div" />
                                    </div>
                                </div>
                            </div>


                        <div id="Instruments" className="mt-8 text-2xl font-semibold leading-9 max-md:mt-10 max-md:max-w-full pl-10">Instruments(only required for teachers):</div>
                            <div role="group" aria-labelledby="instruments">
                                <div className="mt-3 max-md:max-w-full flex gap-4 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col max-md:ml-0 max-md:w-full leading-8 max-md:mt-10">
                                        <div className="flex gap-2.5 ml-10 max-md:ml-2.5">
                                            <label>
                                                <Field type="checkbox" name="instruments" value="1" />
                                                Piano
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="2" />
                                                Guitar
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="3" />
                                                Violin
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="4" />
                                                Voice/Singing
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="5" />
                                                Drums/Percussion
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="6" />
                                                Flute
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="7" />
                                                Clarinet
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="8" />
                                                Saxophone
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="9" />
                                                Cello
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="10" />
                                                Trumpet
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="11" />
                                                Bass (Classical)
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="12" />
                                                Bass Guitar
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="13" />
                                                Ukulele
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="14" />
                                                Trombone
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="15" />
                                                Other
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                        <h3 className='mt-8 text-2xl font-semibold leading-9 max-md:mt-10 max-md:max-w-full pl-10'>Additional Information</h3>
                        <p className='pl-10 self-start mt-2 text-xl font-medium leading-8 text-black max-md:ml-1'>Please provide any additional information, websites, or social media that can help us promote your event/studio.</p>
                        <div className='flex flex-1 gap-3.5 max-md:flex-wrap pl-10'>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="additionalInfo" className='my-auto'></label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[90px] w-[922px]">
                                <Field id="additionalInfo" name="additionalInfo" placeholder="Insert Here" />
                            </div>
                        </div>
                        
                        <div className="flex justify-center items-center">
                            <button type="submit" className='bg-lime-300 hover:bg-lime-700 font-bold py-2 px-4 rounded border border-black mt-8 m-8'>Submit</button>
                        </div>
                        
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RequestPromotionForm;
