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
            <h1>Promote yourself or your event with us</h1>
            <h3>To help us promote your studio or event, please take a few moments to file out our Request Promotion Form. The more information you provide, the better we can promote you.</h3>
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
                        <h3 className='font-semibold'>Event Details</h3>
                        <label htmlFor="eventName">Event/Studio Name:</label>
                        <Field id="eventName" name="eventName" placeholder="My Event" />
                        <ErrorMessage name="eventName" component="div" className='text-red-600' />

                        <label htmlFor="dateTime">Date and Time:</label>
                        <Field id="dateTime" name="dateTime" placeholder="DD-MM-YYYY at 12:00am" />
                        <ErrorMessage name="dateTime" component="div" className='text-red-600' />

                        <label htmlFor="nameAddress">Venue/Studio Name and Address:</label>
                        <Field id="nameAddress" name="nameAddress" placeholder="Insert Here" />
                        <ErrorMessage name="nameAddress" component="div" className='text-red-600' />
                    
                        <label htmlFor="eventDescription">Description of the Event:</label>
                        <Field id="eventDescription" name="eventDescription" placeholder="Insert Here" />

                        <h3 className='font-semibold'>Contact Information</h3>
                        <label htmlFor="name">Name</label>
                        <Field id="name" name="name" placeholder="Jane Doe" />
                        <ErrorMessage name="name" component="div" className='text-red-600' />

                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="jane@acme.com" type="email" />
                        <ErrorMessage name="email" component="div" className='text-red-600' />

                        <label htmlFor="phoneNumber">Phone Number</label>
                        <Field id="phoneNumber" name="phoneNumber" placeholder="+44 00000 00000" />
                        <ErrorMessage name="phoneNumber" component="div" className='text-red-600' />

                        <div id="Participant Type" className="font-semibold">Type of Participant</div>
                            <div role="group" aria-labelledby="participant-type">
                                <p>I am a:</p>
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
                            </div>
                            <ErrorMessage name="participantType" component="div" className='text-red-600' />
        
                        <div id="Event Type" className="font-semibold">Type of Event</div>
                            <div role="group" aria-labelledby="event-type">
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

                        <div id="Music Genre" className="font-semibold">Genre of Music</div>
                            <div role="group" aria-labelledby="music-genre">
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


                        <div id="Instruments" className="font-semibold">Instruments(only required for teachers):</div>
                            <div role="group" aria-labelledby="instruments">
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

                        <h3 className='font-semibold'>Additional Information</h3>
                        <p>Please provide any additional information, websites, or social media that can help us promote your event/studio.</p>
                        <label htmlFor="additionalInfo"></label>
                        <Field id="additionalInfo" name="additionalInfo" placeholder="Insert Here" />
                        
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RequestPromotionForm;
