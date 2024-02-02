const isValidDomain = require('is-valid-domain')
const exampleProvider = require('../providers/example')

exports.communicatingFilesExample = async function (req, res) {
  const domain = req.params.domain.toLowerCase()

  const flag = isValidDomain(domain);
  console.log('Communicating Files Example of ' + domain)


  if (flag) {
    try {
      const response = await exampleProvider.communicatingFilesExample(domain);
      return res.status(200).json({
        message: "ok",
        response
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Error while waiting from response using domain",
      })
    }
  } else {
    return res.status(400).json({
      message: "Invalid Domain"
    })
  }
}
