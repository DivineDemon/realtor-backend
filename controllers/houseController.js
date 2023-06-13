import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addHouse = async (req, res) => {
  try {
    const response = await prisma.house.create({
      data: {
        ...req.body,
        agent: {
          connect: { id: req.query.agent_id },
        },
      },
    });

    res.status(200).json({
      status: true,
      message: "House Added Successfully!",
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

export const getAllHouses = async (_, res) => {
  try {
    const response = await prisma.house.findMany();
    if (response.length <= 0) {
      res.status(404).json({
        success: false,
        message: "Houses Not Found!",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Retrieved All Houses!",
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
