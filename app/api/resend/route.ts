import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { title, mail, body } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['icarovscarvalho@gmail.com'],
      subject: title,
      html: body,
    });

    if (error) {
      console.error(error);
      return Response.json({ success: false, message: 'Erro ao enviar e-mail' }, { status: 500 });
    }

    return Response.json({ success: true, message: 'Mensagem enviada com sucesso!' });

  } catch (err) {
    console.error(err);
    return Response.json({ success: false, message: 'Erro interno no servidor' }, { status: 500 });
  }
}