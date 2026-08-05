const express = require("express");
const { state } = require("../../state");

const MISSION_RESPONSE = require("./responses/get-mission-1-2.json");

const router = express.Router();

router.get("/:slug", (req, res) => {
  res.json(MISSION_RESPONSE);
});

router.get("/:slug/bookmark", (req, res) => {
  res.json({ bookmark: null });
});

router.put("/:slug/bookmark", (req, res) => {
  res.status(204).end();
});

router.delete("/:slug/bookmark", (req, res) => {
  res.status(204).end();
});

router.post("/:slug/questions/:questionSlug/submissions", (req, res) => {
  const { questionSlug } = req.params;
  const { answerOptionId } = req.body || {};

  const isCorrect = answerOptionId === 1;
  const earnedShells = isCorrect ? 12 : 0;

  if (!isCorrect) {
    state.attemptsByQuestion[questionSlug] = (state.attemptsByQuestion[questionSlug] || 1) + 1;
  } else if (!state.attemptsByQuestion[questionSlug]) {
    state.attemptsByQuestion[questionSlug] = 1;
  }

  state.shellBalance += earnedShells;

  const result = {
    isCorrect,
    attemptNumber: state.attemptsByQuestion[questionSlug],
    earnedShells,
    correctOptionId: 1,
    explanation: "Resposta correta! Você entendeu bem o conceito.",
    wrongExplanation: isCorrect ? null : "Não foi dessa vez. Releia a teoria e tente novamente.",
    shellBalance: state.shellBalance,
  };

  res.json(result);
});

router.post("/:slug/completions", (req, res) => {
  state.user.missionsCompleted += 1;
  res.status(204).end();
});

router.delete("/:slug/completions", (req, res) => {
  state.user.missionsCompleted = Math.max(0, state.user.missionsCompleted - 1);
  res.status(204).end();
});

module.exports = router;
