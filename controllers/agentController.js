import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addAgent = async (req, res) => {
  try {
    const { name, image, phone } = req.body;
    const response = await prisma.agent.create({
      data: {
        name,
        image,
        phone,
      },
    });

    res.status(200).json({
      status: true,
      message: "Agent Added Successfully!",
      response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error: error.message,
    });
  }
};

export const getAgent = async (req, res) => {
  try {
    const response = await prisma.agent.findUnique({
      where: {
        id: req.params.agent_id,
      },
    });

    if (response.length <= 0) {
      res.status(404).json({
        success: false,
        message: "Agent Not Found!",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Retrieved Agent!",
        response,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error: error.message,
    });
  }
};

export const getAllAgents = async (_, res) => {
  try {
    const response = await prisma.agent.findMany();
    if (response.length <= 0) {
      res.status(404).json({
        success: false,
        message: "Agents Not Found!",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Retrieved All Agents!",
        response,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error: error.message,
    });
  }
};
