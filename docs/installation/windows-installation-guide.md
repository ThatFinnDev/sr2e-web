---
sidebar_position: 1
---

import DotNet6 from './img/.net6.0.png';
import MLIHomeWin from './img/mli_home_win.png';
import MLISR2SuccessWin from './img/mli_sr2_success_win.png';

# Windows Installation Guide

This guide will show you how to install SR2E on a windows computer!

## Installing requiremens

To use **SR2E**, you need to install its **requirements** first. SR2E uses **MelonLoader** (short ML) as a mod loader and **.NET 6.0**

### Installing .NET 6.0 Runtime

You may already have .NET 6.0 installed. If you already have either the SDK, .NET Desktop Runtime or the .NET Runtime installed, you can skip this step.
The ASP.NET Core Runtime doesn't count.

1. Head to the [Microsoft .NET 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) download page
2. Download the **x64 Windows"** version of **.NET Runtime 6.0**
<img src={DotNet6} alt="<image is loading>" style={{height: 300}} />
3. Run the downloaded **executable**, go through the installer and press exit

### Installing MelonLoader

As mentioned before in the intro, SR2E **requires** MelonLoader in order to work.

1. Download the [MelonLoader Installer](https://github.com/LavaGang/MelonLoader/releases/latest/download/MelonLoader.Installer.exe)
2. Run the downloaded **executable**.
3. Select **Slime Rancher 2**. If you cant find it, you need to add the game manually.
:::
:::warning Incompatibility

**Slime Rancher 2** 0.6.0 and 0.6.1 are not compatible with MelonLoader 0.6.6, 0.6.5 and 0.6.3. Since MelonLoader 0.6.4 has some
issues regarding loading assetbundles, we recommend using version MelonLoader 0.6.2 instead.

:::
<img src={MLIHomeWin} alt="<image is loading>" style={{height: 450}} />

4. Select the **latest version** in the version dropdown and then **press Install**.
5. If everything went smoothly, it should get this message:
<img src={MLISR2SuccessWin} alt="<image is loading>" style={{height: 300}} />
6. Simply press OK, close the installer and proceed to the next step

## Installing SR2E

You're almost finished! Once you've installed SR2E, you're done!

You can install SR2E either from our [GitHub](https://github.com/ThatFinnDev/SR2E/releases) or from [Nexusmods](https://www.nexusmods.com/slimerancher2/mods/60).
GitHub is the recommended method and you can also download.

1. Download the latest **SR2E.dll** from either [GitHub](https://github.com/ThatFinnDev/SR2E/releases) or [Nexusmods](https://www.nexusmods.com/slimerancher2/mods/60)
 beta versions of SR2E there, if you're intersted in testing experimental features.
:::tip Nexusmods

If you choose the Nexusmods option, you'll get a .zip file. You need to extract it in order to get the .dll.

:::
:::tip Steam

If you own **Slime Rancher 2** via **Steam**, you can get the installation folder, by going to Libary -> Right clicking on **Slime Rancher 2** -> 
Manage -> Browse local files. This will open the installation folder

:::
2. Open the **Slime Rancher 2** installation folder
3. There should be a **Mods** folder. If not create one.
4. Simply copy the **SR2E.dll** into the **Mods** folder.

## Done

You've now successfully installed SR2E! Have fun playing!
You might wanna check out our other guides like [Updating SR2E](./sr2e-updating) or [Updating MelonLoader](./melonloader-updating).
Or if you want to know how to use SR2E, check out [SR2E Usage](/docs/category/sr2e-usage).
