async function main() {
    const diamondAddress = '0x71A023b48752Ece02C05dffFBF5Ffe914AD490fE'

    let recipients = ['0xF23f6Bd1a912c34D1d06C3989441D88Ec0204917',
    '0xe25b8Fa6E21f67F8dcccf1222D23Faf6f2e84A2f',
    '0xE707B57fc50B6C87A1Fd938B22DDd31225329d67',
    '0x3b486D3B5DedD0f87C6A58A2217CDC305Cd43a1b',
    '0x269e07Eac18b3681F3447263C28A766457Ff074B',
    '0x37eC905B4b508292C63A294C648a346413167EAF',
    '0x7C8263E38a6c0168015169A6B6f86EEf1f271d71',
    '0xEe6B77Ae75831d3696C2F91285614Ec7E492fB97',
    '0x8CDC596cB3526E2645ecE3BB7639BD095ed394Be',
    '0x436Bb9e1f02C9cA7164afb5753C03c071430216d',
    '0xb97ba0483F265B13CdA929070e09b9bc5a1F44D8',
    '0xDAef18B9b2E300Bf0C48D61f468dBae056053A02',
    '0xDAef18B9b2E300Bf0C48D61f468dBae056053A02',
    '0xd2Da3A07Bf4Cd039D5f36D22F22b6Fe04bD56A86',
    '0xE707B57fc50B6C87A1Fd938B22DDd31225329d67',
    '0x73e342982D5E02BC981c23413c5B5eA0bFa86dAa',
    '0x301a4125ae628984FA2B419EE8FB527A4873312e',
    '0x468eD2605e35c529d3dB7e61714bd6BdbB0571f5',
    '0x2c96108aB531c96989110C2A7506a4B0B68AE2A4',
    '0x291B1EbAF6c7B2b6a03581765b75f4bF55178383',
    '0xe839e6c6ac1cc105b23ec37fb2297d32fd5dcc92',
    '0x8dEBC343a259253Aa43Be5E47eB58a9e668E3cE2',
    '0x244FE02FBCf4dB4Ad96063B161F00e444FC54011',
    '0x244FE02FBCf4dB4Ad96063B161F00e444FC54011',
    '0xDCd050FAd8eaef5DC11BD25E92014D21dCADA74D',
    '0xbf547518196c5194cbaf170e556dd595fadec34f',
    '0x0B000fD71Ec63066FEA195B1E724Ec8Aa52E9Bb8',
    '0x949Ea7852411F9C680f2cF3B63Ec41C51d7fA130',
    '0xe25b8Fa6E21f67F8dcccf1222D23Faf6f2e84A2f',
    '0xb97ba0483F265B13CdA929070e09b9bc5a1F44D8',
    '0x36c1F88c4C1B540A3b5a3f9e8A0cd6F4f134aE42',
    '0x3b486D3B5DedD0f87C6A58A2217CDC305Cd43a1b',
    '0x42c149107739AdCedE14Cf4b7b2C8573524a6040',
    '0x9a7bfFD0e6B4D5ffcb9bf3462eB375682a2073cb',
    '0xB270C422E3757463E58D1A1B423D91935Ef85dCc',
    '0xD7b2879C8922cd704E41E8CC1f18f6994D6B7C36',
    '0x69aC8b337794dAD862C691b00ccc3a89F1F3293d',
    '0x8eda9B461df12AcBBBeaad6591C5c6B96DA6B71D',
    '0x66633Cc6B84CD127A0bb84864c1a4eA0172469A6',
    '0x2CD61418C3d3d38Da2313dAB3ab64CD549d7B71e',
    '0xDc877A64812887ad8Aa4e53F5E0F7c2BdD62f53e',
    '0xab4787b17BfB2004C4B074Ea64871dfA238bd50c',
    '0x2FE1f1843fF87F529BEa00bc21Df8E0469053602',
    '0xC7ee509425388D7Bef92418b881576A1654D2105',
    '0xF7B10D603907658F690Da534E9b7dbC4dAB3E2D6',
    '0xc20122E283E1FFeB56fF6d77e739637D5eB03193',
    '0x92b83C2a7d211E9DEE19c270e462B091300A2fA0',
    '0xF23f6Bd1a912c34D1d06C3989441D88Ec0204917',
    '0xdDA56C4A6257664D87C6B5ECf01e33C6af74dcB9',
    '0x44bC008896076226ba6d5292721239B281dDF970',
    '0x40CF6bb888ca670e20139b1caA0BA0996f65371c',
    '0x4c39185a078B5666C372538231cB793A0928807b',
    '0x609949cCF906303Cfd4f2a8365Cc78a987284Fc7',
    '0xEBd54fD116D961C3bb9FB0999C1223066Aabae6c',
    '0x468eD2605e35c529d3dB7e61714bd6BdbB0571f5',
    '0xB37795f39c546D3511ba061d04783d987D1259a4',
    '0x7fCc3B4a05826c14afaFe6830F3511E9DDE48171',
    '0xb2993F007d2aBaECBb7C3529d78c5de0f1214888',
    '0x1FE6A806E0A9858359E16C58e4f84C790171596b',
    '0x77884B7aEaCcbf1B8A0C5a33E254391b9B49eA8e',
    '0x1C3134b83489053347099dD24c1550aa47a75006',
    '0xab8140174c6e46d78bed397b96da352ea38c2821',
    '0xa1cB3089eA47fFB4A70d66C283063f13E45cF859',
    '0x2fd0476478C01D0472b264e27F9D3C1b30DAda2A',
    '0xC36210AcFD04479aab24b10fcE6EE73F671CeeAc',
    '0x2c96108aB531c96989110C2A7506a4B0B68AE2A4',
    '0xDDaf0EdA222845ecC24866E12017DB2f9a9A8D3b',
    '0x830e5d68e076F9074112013e187936aFE89cfc00',
    '0xB0d6A6a75396aAb4a9e82fB7c0F7822dA7e2A54a',
    '0x00ff6b7D26407A46Af2b631b4fa452a036d027E5',
    '0x1FE6A806E0A9858359E16C58e4f84C790171596b',
    '0x6b0ABF7fcaa10EBAd592409d931571306B875CF4',
    '0x5346AFB94c08AC53dc8a18aa318Cf0383826eD68',
    '0x74C224e438445fDBB1382f71f7a861DB9a35e6D5',
    '0x222e859Cb744eBA5Dcaf5224f52b69Cb1bD72456',
    '0x4176D5d5813Bb33f1761dbEF41107Ec1728062f6',
    '0x6ea24f3cDDDF5B88F90B73A2d7df7ad9C0f9BEC4',
    '0x7E4724C60718A9F87CE51bcF8812Bf90D0b7B9Db',
    '0xDab13d338973daB9c4545D9f92D5D11cD3e1E6cD',
    '0x269e07Eac18b3681F3447263C28A766457Ff074B',
    '0x6Fa565DbD0FBbBb2aD7b0c5Ba31730AE09209610',
    '0x6a9F813fb3e6a8f7013dabD1695bAE1d49aE8481',
    '0x5285D6879f1de2fFf759E705B9DC89C3b841DbaB',
    '0xfdE0690222D27DA2677873a801C79241d6ad626c',
    '0x6e0FC44CcE1B49323185138217649B5E8996A159',
    '0x0236C75860d07e8d5aDD17C88B9DAc04472C2295',
    '0xE805Ff9b9bf7fbfd9EbE13379fC8E470025da0C7',
    '0x3E86eAC93A2dbB4faEB8709d77d451aeDA710eF9',
    '0x33D7ee674AA6A8CEdfA30fD8635091395BE3DA58',
    '0xB3895d9431Ca1f7D3B745398c42Ca6bbF5A280Ff',
    '0xE163c763Bdc10990185E61cF5e18C985939b8643',
    '0xfE5E7D59387cFbfa27f344430533dB717810CE04',
    '0x97CaE5eCe4E6bfE724fd1dACc91B7CD4Ad7aADB2']

    let singleitemId1=	[72]
let singleitemId2=	[73]
let singleitemId3=	[74]
let singleitemId4=	[75]
let singleitemId5=	[72]
let singleitemId6=	[73]
let singleitemId7=	[74]
let singleitemId8=	[75]
let singleitemId9=	[72]
let singleitemId10=	[73]
let singleitemId11=	[74]
let singleitemId12=	[75]
let singleitemId13=	[72]
let singleitemId14=	[73]
let singleitemId15=	[74]
let singleitemId16=	[75]
let singleitemId17=	[72]
let singleitemId18=	[73]
let singleitemId19=	[74]
let singleitemId20=	[75]
let singleitemId21=	[72]
let singleitemId22=	[73]
let singleitemId23=	[74]
let singleitemId24=	[75]
let singleitemId25=	[72]
let singleitemId26=	[73]
let singleitemId27=	[74]
let singleitemId28=	[75]
let singleitemId29=	[72]
let singleitemId30=	[73]
let singleitemId31=	[74]
let singleitemId32=	[75]
let singleitemId33=	[72]
let singleitemId34=	[73]
let singleitemId35=	[74]
let singleitemId36=	[75]
let singleitemId37=	[72]
let singleitemId38=	[73]
let singleitemId39=	[74]
let singleitemId40=	[75]
let singleitemId41=	[72]
let singleitemId42=	[73]
let singleitemId43=	[74]
let singleitemId44=	[75]
let singleitemId45=	[72]
let singleitemId46=	[73]
let singleitemId47=	[74]
let singleitemId48=	[75]
let singleitemId49=	[72]
let singleitemId50=	[73]
let singleitemId51=	[74]
let singleitemId52=	[75]
let singleitemId53=	[72]
let singleitemId54=	[73]
let singleitemId55=	[74]
let singleitemId56=	[75]
let singleitemId57=	[72]
let singleitemId58=	[73]
let singleitemId59=	[74]
let singleitemId60=	[75]
let singleitemId61=	[72]
let singleitemId62=	[73]
let singleitemId63=	[74]
let singleitemId64=	[75]
let singleitemId65=	[72]
let singleitemId66=	[73]
let singleitemId67=	[74]
let singleitemId68=	[75]
let singleitemId69=	[72]
let singleitemId70=	[73]
let singleitemId71=	[74]
let singleitemId72=	[75]
let singleitemId73=	[72]
let singleitemId74=	[73]
let singleitemId75=	[74]
let singleitemId76=	[75]
let singleitemId77=	[72]
let singleitemId78=	[73]
let singleitemId79=	[74]
let singleitemId80=	[75]
let singleitemId81=	[72]
let singleitemId82=	[73]
let singleitemId83=	[74]
let singleitemId84=	[72]
let singleitemId85=	[73]
let singleitemId86=	[74]
let singleitemId87=	[75]
let singleitemId88=	[72]
let singleitemId89=	[73]
let singleitemId90=	[74]
let singleitemId91=	[75]
let singleitemId92=	[72]
let singleitemId93=	[73]

    
const allItemObj=[]
allItemObj.push(singleitemId1,
    singleitemId2,
    singleitemId3,
    singleitemId4,
    singleitemId5,
    singleitemId6,
    singleitemId7,
    singleitemId8,
    singleitemId9,
    singleitemId10,
    singleitemId11,
    singleitemId12,
    singleitemId13,
    singleitemId14,
    singleitemId15,
    singleitemId16,
    singleitemId17,
    singleitemId18,
    singleitemId19,
    singleitemId20,
    singleitemId21,
    singleitemId22,
    singleitemId23,
    singleitemId24,
    singleitemId25,
    singleitemId26,
    singleitemId27,
    singleitemId28,
    singleitemId29,
    singleitemId30,
    singleitemId31,
    singleitemId32,
    singleitemId33,
    singleitemId34,
    singleitemId35,
    singleitemId36,
    singleitemId37,
    singleitemId38,
    singleitemId39,
    singleitemId40,
    singleitemId41,
    singleitemId42,
    singleitemId43,
    singleitemId44,
    singleitemId45,
    singleitemId46,
    singleitemId47,
    singleitemId48,
    singleitemId49,
    singleitemId50,
    singleitemId51,
    singleitemId52,
    singleitemId53,
    singleitemId54,
    singleitemId55,
    singleitemId56,
    singleitemId57,
    singleitemId58,
    singleitemId59,
    singleitemId60,
    singleitemId61,
    singleitemId62,
    singleitemId63,
    singleitemId64,
    singleitemId65,
    singleitemId66,
    singleitemId67,
    singleitemId68,
    singleitemId69,
    singleitemId70,
    singleitemId71,
    singleitemId72,
    singleitemId73,
    singleitemId74,
    singleitemId75,
    singleitemId76,
    singleitemId77,
    singleitemId78,
    singleitemId79,
    singleitemId80,
    singleitemId81,
    singleitemId82,
    singleitemId83,
    singleitemId84,
    singleitemId85,
    singleitemId86,
    singleitemId87,
    singleitemId88,
    singleitemId89,
    singleitemId90,
    singleitemId91,
    singleitemId92,
    singleitemId93)

    let quantities= [1
    ]
 
   

     //champions
     let champs= ['0x256530ce969f76EcE1cf66998aef0eAB6a940fA8',
        '0x3477823dc687e24147494b910b367CC85298DF8C',
        '0x115B65464043E9d0aD7422F95D1398b593c0Efd3',
        '0x7887829d28c2dc8C22BdFBa8325B14C2453cB4B6',
        '0x33F8F9dBF8ac7c47561BC3085A2137F4B1E62d3b']
        let quantity=[1,1,1,1,1]
        let fullsets=[72,73,74,75]


    const dao = await ethers.getContractAt('DAOFacet', diamondAddress)

    for (let i = 0; i < allItemObj.length; i++) {

        const sendrecipients = await dao.mintItems(recipients[i], allItemObj[i], quantities)
        const receipt = await sendrecipients.wait()
        if (!receipt.status) {
            throw Error(`Not Sent: ${sendrecipients.hash}`)
        }
        console.log('Minted item' ,allItemObj[i]  , 'and sent to', recipients[i], 'at txn', sendrecipients.hash, i)
    }


console.log("Sending to the champions \o/")
    for (let j=0;j<champs.length;j++){
        const sendToChamps= await dao.mintItems(champs[j], fullsets, quantity)
        const receipt = await sendToChamps.wait()
        if (!receipt.status) {
            throw Error(`Not Sent: ${sendToChamps.hash}`)
        }
        console.log('Minted items' ,fullsets  , 'and sent to', champs[j], 'at txn', sendToChamps.hash, j)
    }
    }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })