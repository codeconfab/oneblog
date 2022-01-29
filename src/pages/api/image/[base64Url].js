import {imageProxy} from '../../../imageProxy';

export const config = {
  api: {
    externalResolver: true,
  },
};

const Image = async (req, res) => {
  res.set = res.setHeader;
  req.params = req.query;
  return await imageProxy(req, res);
};

export default Image;
