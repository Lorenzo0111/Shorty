# Shorty

<div align="center">

[![GitHub Release](https://img.shields.io/github/v/release/Lorenzo0111/Shorty)](https://github.com/Lorenzo0111/Shorty/releases/latest)
[![GitHub License](https://img.shields.io/github/license/Lorenzo0111/Shorty)](LICENSE)
[![Discord](https://img.shields.io/discord/1088775598337433662)](https://discord.gg/HT47UQXBqG)

  <hr />

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FLorenzo0111%2FBank&env=MONGODB_URI,AUTH_SECRET,AUTH_DISCORD_ID,AUTH_DISCORD_SECRET&envDescription=All%20the%20Environment%20Variables%20needed%20for%20the%20app%20to%20work&envLink=https%3A%2F%2Fgithub.com%2FLorenzo0111%2FShorty%3Ftab%3Dreadme-ov-file%23deploying&project-name=shorty&repository-name=Shorty"><img src="https://vercel.com/button" alt="Deploy with Vercel" height="32" /></a>

</div>

## What is Shorty

Shorty is a simple URL shortner that provides a fast and easy way to track clicks for all your links.

<img src="https://github.com/Lorenzo0111/Shorty/blob/main/media/Dashboard.png?raw=true" />

## Deploying

You'll have to set the following environment variables to setup the dashboard, here is a list of them:

> ✨ You can generate secret tokens by visiting [this link](https://generate-secret.vercel.app/32)

### Dashboard Environment Variables

| Key                 | Description               | Example    |
| ------------------- | ------------------------- | ---------- |
| MONGODB_URI         | The MongoDB url           | mongodb:// |
| AUTH_SECRET         | The auth secret           |            |
| AUTH_DISCORD_ID     | The discord client id     |            |
| AUTH_DISCORD_SECRET | The discord client secret |            |

### Serverless

You can deploy the project to Vercel or any other hosting service by clicking the buttons above.

### Selfhosting

If you want to selfhost, you can run `pnpm i`, `pnpm build` and `pnpm start` to start the program.

The dashboard will usually be available [here](http://localhost:3000/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you need help, feel free to join the [Discord Server](https://discord.gg/HT47UQXBqG) or open an issue.
