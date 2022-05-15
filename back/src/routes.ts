import express from "express";
import { NodeMailerAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedback-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-uses-case";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  

  const prismaFeedbackRepository = new PrismaFeedbacksRepository();
  const nodeMailerAdapter = new NodeMailerAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodeMailerAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
