
export const RegisterSuccessMail = (firstName,lastName) => {
    return`<html>
        <head>
            <!-- Add Bootstrap CSS link here -->
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2>Welcome to InnerIsland</h2>
                        <p>Dear ${firstName} ${lastName},</p>
                        <p>
                            We are delighted to welcome you to InnerIsland, your trusted platform for mental health support and wellness.
                        </p>
                        <p>
                            Congratulations on successfully registering with us! Your decision to take this step towards better mental well-being is commendable.
                        </p>
                        <p>
                            At InnerIsland, we are committed to providing a safe and nurturing environment where you can find the support and resources you need to prioritize your mental health. Here's what you can expect from your InnerIsland journey:
                        </p>
                        <ul>
                            <li>Access to Professional Support</li>
                            <li>Community of Understanding</li>
                            <li>Resources for Self-Care</li>
                            <li>Personalized Recommendations</li>
                        </ul>
                        <p>We're here to support you every step of the way, and we encourage you to make the most of your InnerIsland experience.</p>
                        <p>Should you have any questions, concerns, or if there's anything specific you'd like to explore on InnerIsland, please don't hesitate to reach out to us.</p>
                        <p>Thank you for choosing InnerIsland as your mental health companion. We look forward to being a part of your journey towards a happier, healthier you.</p>
                        <p>Warm regards,</p>
                        <p>The InnerIsland Team</p>
                        <p><strong>Contact Email:</strong> <a href="mailto:support@innerisland.com">support@innerisland.com</a></p>
                    </div>
                </div>
            </div>
        </body>
        </html>`


}
