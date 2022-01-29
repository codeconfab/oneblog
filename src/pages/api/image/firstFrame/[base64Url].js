import {firstFrame} from '../../../../imageProxy';

export const config = {
  api: {
    externalResolver: true,
  },
};

const firstFrameHandler = (req, res) => {
  res.set = res.setHeader;
  req.params = req.query;
  return firstFrame(req, res);
};

export default firstFrameHandler;
