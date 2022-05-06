import { SubmitFeedbackUseCase } from './submit-feedback-use-case'

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy},
    // { create: async () => {}},
    { sendMail: sendMailSpy}
    // { sendMail: async () => {}}
)

describe('Submit feedback', () => {
    it('should be able to submit to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,4545454545464657897',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    });
    
    it('should not be able to submit without type', async () => {
    await expect(submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,4545454545464657897',
    })).rejects.toThrow();
});
    
    it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,4545454545464657897',
    })).rejects.toThrow();
});
    
    it('should not be able to submit feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
        type: 'BUG',
        comment: 'ta tudo bugado',
        screenshot: '123',
    })).rejects.toThrow();
});





});