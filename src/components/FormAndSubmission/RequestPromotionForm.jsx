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
                                <label htmlFor="eventName" className="my-auto" aria-label="Event/Studio Name">Event/Studio Name:</label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[45px] w-[366px]">
                                <Field id="eventName" name="eventName" placeholder="My Event" />
                                <ErrorMessage name="eventName" component="div" className='text-red-600' />
                            </div>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="dateTime" className='my-auto' aria-label='Date and Time'>Date and Time:</label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[45px] w-[366px]">
                                <Field id="dateTime" name="dateTime" placeholder="DD-MM-YYYY at 12:00am" />
                                <ErrorMessage name="dateTime" component="div" className='text-red-600' />
                            </div>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="nameAddress" className='my-auto' aria-label='Venue and Studio Name'>Venue/Studio Name and Address:</label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[45px] w-[366px]">
                                <Field id="nameAddress" name="nameAddress" placeholder="Insert Here" />
                                <ErrorMessage name="nameAddress" component="div" className='text-red-600' />
                            </div>
                        </div>
                    
                        <div className='flex flex-1 gap-3.5 max-md:flex-wrap pl-10 pr-10 pt-10'>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="eventDescription" className='my-auto' aria-label='Event Description'>Description of the Event:</label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[90px] w-[922px]">
                                <Field id="eventDescription" name="eventDescription" placeholder="Insert Here" />
                            </div>
                        </div>

                        <h3 className='mt-12 text-2xl font-semibold leading-9 max-md:mt-10 max-md:max-w-full pl-10' aria-label='Contact Information'>Contact Information</h3>
                        <div className='flex flex-1 gap-3.5 max-md:flex-wrap pl-10 pr-10'>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="name" className='my-auto' aria-label='name'>Name</label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[45px] w-[366px]">
                                <Field id="name" name="name" placeholder="Jane Doe" />
                                <ErrorMessage name="name" component="div" className='text-red-600' />
                            </div>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="email" className='my-auto' aria-label='Email'>Email</label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[45px] w-[366px]">
                                <Field id="email" name="email" placeholder="jane@acme.com" type="email" />
                                <ErrorMessage name="email" component="div" className='text-red-600' />
                            </div>
                            <div className='flex items-center gap-3'>
                                <label htmlFor="phoneNumber" className='my-auto' aria-label='Phone Number'>Phone Number</label>
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
                                                <Field type="radio" name="participantType" value="1" aria-label="Event Organiser" />
                                                Event Organizer
                                            </label>
                                            <label>
                                                <Field type="radio" name="participantType" value="2" aria-label="Performer/Band" />
                                                Performer/Band
                                            </label>
                                            <label>
                                                <Field type="radio" name="participantType" value="3" aria-label="Music Teacher" />
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
                                                <Field type="checkbox" name="eventType" value="1" aria-label="Concert/Show" />
                                                Concert/Show
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="2" aria-label="Festival" />
                                                Festival
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="3" aria-label="Recital" />
                                                Recital
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="4" aria-label="Opera/Musical" />
                                                Opera/Musical
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="5" aria-label="Open Mic Night" />
                                                Open Mic Night
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="6" aria-label="Competition" />
                                                Competition
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="7" aria-label="Workshop" />
                                                Workshop
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="8" aria-label="Masterclass" />
                                                Masterclass
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="9" aria-label="Conference" />
                                                Conference
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="10" aria-label="Private Lesson" />
                                                Private Lesson
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="11" aria-label="Group Lesson" />
                                                Group Lesson
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="12" aria-label="Music Theory Class" />
                                                Music Theory Class
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="eventType" value="13" aria-label="Other" />
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
                                                <Field type="checkbox" name="musicGenre" value="1" aria-label="Pop" />
                                                Pop
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="2"aria-label="Rock" />
                                                Rock
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="3" aria-label="Electronic/Dance" />
                                                Electronic/Dance
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="4" aria-label="Indie" />
                                                Indie
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="5" aria-label="Indie" />
                                                Indie
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="6" aria-label="Hip Hop/Rap" />
                                                Hip Hop/Rap
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="7" aria-label="R&B/Soul" />
                                                R&B/Soul
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="8" aria-label="Folk" />
                                                Folk
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="9" aria-label="Jazz" />
                                                Jazz
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="10" aria-label="Classical" />
                                                Classical
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="11" aria-label="Reggae" />
                                                Reggae
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="12" aria-label="Salsa" />
                                                Salsa
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="13" aria-label="Afrobeat" />
                                                Afrobeat
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="14" aria-label="Bollywood" />
                                                Bollywood
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="15" aria-label="Flamenco" />
                                                Flamenco
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="16" aria-label="Celtic" />
                                                Celtic
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="17" aria-label="Bhangra"/>
                                                Bhangra
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="musicGenre" value="18" aria-label="Other" />
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
                                                <Field type="checkbox" name="instruments" value="1" aria-label="Piano" />
                                                Piano
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="2" aria-label="Guitar" />
                                                Guitar
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="3" aria-label="Violin"/>
                                                Violin
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="4" aria-label="Voice/Singing"/>
                                                Voice/Singing
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="5" aria-label="Drums/Percussion"/>
                                                Drums/Percussion
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="6" aria-label="Flute"/>
                                                Flute
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="7" aria-label="Clarinet"/>
                                                Clarinet
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="8" aria-label="Saxophone"/>
                                                Saxophone
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="9" aria-label="Cello"/>
                                                Cello
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="10" aria-label="Trumpet"/>
                                                Trumpet
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="11" aria-label="Bass Classical"/>
                                                Bass (Classical)
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="12" aria-label="Bass Guitar"/>
                                                Bass Guitar
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="13" aria-label="Ukulele"/>
                                                Ukulele
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="14" aria-label="Trombone"/>
                                                Trombone
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="instruments" value="15" aria-label="Other"/>
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
                                <label htmlFor="additionalInfo" className='my-auto' aria-label="Additional Information"></label>
                            </div>
                            <div className="shrink-0 max-w-full bg-white border border-black border-solid h-[90px] w-[922px]">
                                <Field id="additionalInfo" name="additionalInfo" placeholder="Insert Here" />
                            </div>
                        </div>
                        
                        <div className="flex justify-center items-center" aria-label="Submit">
                            <button type="submit" className='bg-lime-300 hover:bg-lime-700 font-bold py-2 px-4 rounded border border-black mt-8 m-8'>Submit</button>
                        </div>
                        
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RequestPromotionForm;
