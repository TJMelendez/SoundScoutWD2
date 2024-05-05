import Banner from '/src/components/Banner.jsx';
import RequestPromotionForm from '/src/components/FormAndSubmission/RequestPromotionForm.jsx';

const RequestPromotion = () => {
    return (
        <div>
            <Banner title='Need to promote yourself or your event? We got you covered' backgroundImage='https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            <RequestPromotionForm />
        </div>
    )
}

export default RequestPromotion;