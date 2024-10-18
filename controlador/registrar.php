<?php

include "conexion.php";

$source    = $_POST['source'];
$lang      = $_POST['lang'];
// INFO
$num_socio = $_POST['numero_socio'];
$correo    = $_POST['correo'];
$nombre    = $_POST['nombre'];
$hab       = $_POST['num_hab'];
$hotel     = $_POST['hotel'];

if ($source==1) {

  $sql = "INSERT INTO `registros` (`id_hotel`, `fecha_registro`, `nombre`, `habitacion`, `correo`, `id_socio`) VALUES ('".$hotel."',now(),'".$nombre."','".$hab."','".$correo."','".$num_socio."')";
  $result = $green->query($sql);
  $latest_id = $green->insert_id;

  $sql_h = "INSERT INTO `historial`(`id_registro`, `id_servicio`, `fecha`) VALUES ('".$latest_id."',3,now())";
  $result_h = $green->query($sql_h);

  $link = "../terminado.php?lang=".$lang;

} else {

  $acumula     = $_POST['acumula'];
  $referencia  = $_POST['numero_referencia'];

  $sql = "INSERT INTO `registros` (`id_hotel`, `fecha_registro`, `nombre`, `habitacion`, `correo`, `id_socio`, `acumula`, `num_referencia`) VALUES ('".$hotel."',now(),'".$nombre."','".$hab."','".$correo."','".$num_socio."','".$acumula."','".$referencia."')";
  $result = $green->query($sql);
  $latest_id = $green->insert_id;

  $sql_h = "INSERT INTO `historial`(`id_registro`, `id_servicio`, `fecha`) VALUES ('".$latest_id."',3,now())";
  $result_h = $green->query($sql_h);

  $link = "../registrado.php";

}

// Mandar correo

//correo del usuario
$to= $correo;

$sql_correo = "SELECT * FROM correo_texto WHERE id_leng='" . $lang . "' AND id_hotel='".$hotel."' ";
$result_correo = $green->query($sql_correo);
$row_correo = $result_correo->fetch_assoc();
                
            $htmlContent =
            "
            <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">
            <html
              dir=\"ltr\"
              xmlns=\"http://www.w3.org/1999/xhtml\"
              xmlns:o=\"urn:schemas-microsoft-com:office:office\"
              lang=\"es\"
              style=\"padding: 0; margin: 0\">
              <head>
                <meta charset=\"UTF-8\" />
                <meta content=\"width=device-width, initial-scale=1\" name=\"viewport\" />
                <meta name=\"x-apple-disable-message-reformatting\" />
                <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />
                <meta content=\"telephone=no\" name=\"format-detection\" />
                <title>Araiza Hoteles</title>
                <!--[if (mso 16)]><style type=\"text/css\">
                    a {
                      text-decoration: none;
                    }
                  </style><![endif]-->
                <!--[if gte mso 9]><style>
                    sup {
                      font-size: 100% !important;
                    }
                  </style><![endif]-->
                <!--[if gte mso 9]><xml>
                    <o:OfficeDocumentSettings>
                      <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                  </xml>
                <![endif]-->
                <style type=\"text/css\">
                
                  #outlook a {
                    padding: 0;
                  }
                  .ExternalClass {
                    width: 100%;
                  }
                  .ExternalClass,
                  .ExternalClass p,
                  .ExternalClass span,
                  .ExternalClass font,
                  .ExternalClass td,
                  .ExternalClass div {
                    line-height: 100%;
                  }
                  .es-button {
                    mso-style-priority: 100 !important;
                    text-decoration: none !important;
                  }
                  a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                  }
                  .es-desk-hidden {
                    display: none;
                    float: left;
                    overflow: hidden;
                    width: 0;
                    max-height: 0;
                    line-height: 0;
                    mso-hide: all;
                  }
                  .es-button-border:hover a.es-button,
                  .es-button-border:hover button.es-button {
                    background: #ffffff !important;
                  }
                  .es-button-border:hover {
                    background: #ffffff !important;
                    border-style: solid solid solid solid !important;
                    border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3 !important;
                  }
                  td .es-button-border-1709752212425:hover {
                    border-color: #ebbc84 #ebbc84 #ebbc84 #ebbc84 !important;
                    background: #34434f !important;
                    border-style: solid solid solid solid !important;
                  }
                  td .es-button-border:hover a.es-button-1709752230983 {
                    background: #34434f !important;
                    color: #ffffff !important;
                  }
          
                  @media only screen and (max-width: 800px) {
                    .es-m-p40t {
                      padding-top: 40px !important;
                    }
                  }
          
                  @media only screen and (max-width: 600px) {
                    p,
                    ul li,
                    ol li,
                    a {
                      line-height: 150% !important;
                    }
                    h1,
                    h2,
                    h3,
                    h1 a,
                    h2 a,
                    h3 a {
                      line-height: 120% !important;
                    }
                    h1 {
                      font-size: 20px !important;
                      text-align: center;
                    }
                    h2 {
                      font-size: 16px !important;
                      text-align: left;
                    }
                    h3 {
                      font-size: 20px !important;
                      text-align: center;
                    }
                    .es-header-body h1 a,
                    .es-content-body h1 a,
                    .es-footer-body h1 a {
                      font-size: 20px !important;
                    }
                    h2 a {
                      text-align: left;
                    }
                    .es-header-body h2 a,
                    .es-content-body h2 a,
                    .es-footer-body h2 a {
                      font-size: 16px !important;
                    }
                    .es-header-body h3 a,
                    .es-content-body h3 a,
                    .es-footer-body h3 a {
                      font-size: 20px !important;
                    }
                    .es-menu td a {
                      font-size: 14px !important;
                    }
                    .es-header-body p,
                    .es-header-body ul li,
                    .es-header-body ol li,
                    .es-header-body a {
                      font-size: 10px !important;
                    }
                    .es-content-body p,
                    .es-content-body ul li,
                    .es-content-body ol li,
                    .es-content-body a {
                      font-size: 16px !important;
                    }
                    .es-footer-body p,
                    .es-footer-body ul li,
                    .es-footer-body ol li,
                    .es-footer-body a {
                      font-size: 12px !important;
                    }
                    .es-infoblock p,
                    .es-infoblock ul li,
                    .es-infoblock ol li,
                    .es-infoblock a {
                      font-size: 12px !important;
                    }
                    *[class=\"gmail-fix\"] {
                      display: none !important;
                    }
                    .es-m-txt-c,
                    .es-m-txt-c h1,
                    .es-m-txt-c h2,
                    .es-m-txt-c h3 {
                      text-align: center !important;
                    }
                    .es-m-txt-r,
                    .es-m-txt-r h1,
                    .es-m-txt-r h2,
                    .es-m-txt-r h3 {
                      text-align: right !important;
                    }
                    .es-m-txt-l,
                    .es-m-txt-l h1,
                    .es-m-txt-l h2,
                    .es-m-txt-l h3 {
                      text-align: left !important;
                    }
                    .es-m-txt-r img,
                    .es-m-txt-c img,
                    .es-m-txt-l img {
                      display: inline !important;
                    }
                    .es-button-border {
                      display: block !important;
                    }
                    a.es-button,
                    button.es-button {
                      font-size: 14px !important;
                      display: block !important;
                      border-left-width: 0px !important;
                      border-right-width: 0px !important;
                    }
                    .es-btn-fw {
                      border-width: 10px 0px !important;
                      text-align: center !important;
                    }
                    .es-adaptive table,
                    .es-btn-fw,
                    .es-btn-fw-brdr,
                    .es-left,
                    .es-right {
                      width: 100% !important;
                    }
                    .es-content table,
                    .es-header table,
                    .es-footer table,
                    .es-content,
                    .es-footer,
                    .es-header {
                      width: 100% !important;
                      max-width: 600px !important;
                    }
                    .es-adapt-td {
                      display: block !important;
                      width: 100% !important;
                    }
                    .adapt-img {
                      width: 100% !important;
                      height: auto !important;
                    }
                    .es-m-p0 {
                      padding: 0px !important;
                    }
                    .es-m-p0r {
                      padding-right: 0px !important;
                    }
                    .es-m-p0l {
                      padding-left: 0px !important;
                    }
                    .es-m-p0t {
                      padding-top: 0px !important;
                    }
                    .es-m-p40t {
                      padding-top: 40px !important;
                    }
                    .es-m-p0b {
                      padding-bottom: 0 !important;
                    }
                    .es-m-p40b {
                        padding-bottom: 40 !important;
                    }
                    .es-m-p20b {
                      padding-bottom: 20px !important;
                    }
                    .es-mobile-hidden,
                    .es-hidden {
                      display: none !important;
                    }
                    tr.es-desk-hidden,
                    td.es-desk-hidden,
                    table.es-desk-hidden {
                      width: auto !important;
                      overflow: visible !important;
                      float: none !important;
                      max-height: inherit !important;
                      line-height: inherit !important;
                    }
                    tr.es-desk-hidden {
                      display: table-row !important;
                    }
                    table.es-desk-hidden {
                      display: table !important;
                    }
                    td.es-desk-menu-hidden {
                      display: table-cell !important;
                    }
                    .es-menu td {
                      width: 1% !important;
                    }
                    table.es-table-not-adapt,
                    .esd-block-html table {
                      width: auto !important;
                    }
                    table.es-social {
                      display: inline-block !important;
                    }
                    table.es-social td {
                      display: inline-block !important;
                    }
                    .es-desk-hidden {
                      display: table-row !important;
                      width: auto !important;
                      overflow: visible !important;
                      max-height: inherit !important;
                    }
                  }
                  @media screen and (max-width: 384px) {
                    .mail-message-content {
                      width: 414px !important;
                    }
                    .es-m-p40t {
                      padding-top: 40px !important;
                    }
                  }
                </style>
              </head>
              <body style=\" width: 100%; font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; padding: 0; margin: 0;\">
                <div dir=\"ltr\" class=\"es-wrapper-color\" lang=\"es\" style=\"background-color: #fff\">
                  <!--[if gte mso 9]><v:background xmlns:v=\"urn:schemas-microsoft-com:vml\" fill=\"t\">
                      <v:fill type=\"tile\" color=\"#fff\"></v:fill> </v:background><![endif]-->
                  <table class=\"es-wrapper\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" role=\"none\" style=\" mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; padding: 0; margin: 0;
                  width: 100%; height: 100%; background-repeat: repeat; background-position: center top; background-color: #fff;\">
                    <tr style=\"border-collapse: collapse\">
                      <td valign=\"top\" style=\"padding: 0; margin: 0\">
                        
                        <table
                          cellpadding=\"0\"
                          cellspacing=\"0\"
                          class=\"es-header\"
                          align=\"center\"
                          role=\"none\"
                          style=\"
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-color: transparent; 
                            border-collapse: collapse;
                            border-spacing: 0px;
                            table-layout: fixed !important;
                            width: 100%;
                            background-repeat: repeat;
                            background-position: center top;
                          \"
                        >
                        
                                    <table
                                      cellpadding=\"0\"
                                      cellspacing=\"0\"
                                      width=\"100%\"
                                      role=\"none\"
                                      style=\"
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      \"
                                    >
                                      <tr style=\"border-collapse: collapse\">
                                        <td
                                          align=\"center\"
                                          valign=\"top\"
                                          style=\"padding: 0; margin: 0; width: 560px;\"
                                        >
                                          <table
                                            cellpadding=\"0\"
                                            cellspacing=\"0\"
                                            width=\"100%\"
                                            role=\"presentation\"
                                            style=\"
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              border-collapse: collapse;
                                              border-spacing: 0px;
                                            \"
                                          >
                                            <tr style=\"border-collapse: collapse;\">
                                              <td
                                                align=\"center\"
                                                style=\"padding: 0; margin: 0; border:none; \">
                                              <img class=\"adapt-img\" src=\"https://araizadiamante.com/araiza_green/images/fondo2.png\" alt style=\"display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;background-color: #cef4f4;\" width=\"600\">
                                              </td>
                                            </tr>
                                            
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <table
                          class=\"es-content\"
                          cellspacing=\"0\"
                          cellpadding=\"0\"
                          align=\"center\"
                          role=\"none\"
                          style=\"
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-color: transparent; 
                            border-collapse: collapse;
                            border-spacing: 0px;
                            table-layout: fixed !important;
                            width: 100%;
                          \"
                        >
                          <tr style=\"border-collapse: collapse\">
                            <td
                              style=\"padding: 0; margin: 0; background-color: #fff\"
                              bgcolor=\"#fff\"
                              align=\"center\"
                            >
                              <table
                                class=\"es-content-body\"
                                style=\"
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-color: transparent; 
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  background-color: #fff;
                                  width: 600px;
                                \"
                                cellspacing=\"0\"
                                cellpadding=\"0\"
                                bgcolor=\"#fff\"
                                align=\"center\"
                                role=\"none\"
                              >
                                <tr style=\"border-collapse: collapse\">
                                  <td
                                    align=\"left\"
                                    bgcolor=\"#293641\"
                                    style=\"
                                      padding: 0;
                                      margin: 0;
                                      padding-left: 20px;
                                      padding-right: 20px;
                                      background-color: #cef4f4;
                                    \"
                                  >
                                    <table
                                      width=\"480px\"
                                      align=\"center\"
                                      cellspacing=\"0\"
                                      cellpadding=\"0\"
                                      role=\"none\"
                                      style=\"
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                        margin-bottom: 50px;
                                      \"
                                    >
                                      <tr style=\"border-collapse: collapse\">
                                        <td
                                          valign=\"top\"
                                          align=\"center\"
                                          style=\"padding: 0; margin: 0; width: 480px; \"
                                        >
                                          <table
                                            style=\"
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              border-collapse: collapse;
                                              border-spacing: 0px;
                                              background-position: left top;
                                              background-color:#ffffff;
                                              padding-bottom: 40px;
                                            \"
                                            width=\"100%\"
                                            bgcolor=\"#ffffff\"
                                            cellspacing=\"0\"
                                            cellpadding=\"0\"
                                            role=\"presentation\"
                                          >
                                            <tr class=\"es-m-p40t\" style=\"border-collapse: collapse\">
                                              <td class=\"es-m-p40t\" 
                                                align=\"center\"
                                                style=\"
                                                  padding: 0;
                                                  margin: 0;
                                                  padding-top: 5px;
                                                  padding-bottom: 5px;
                                                  font-size: 0px;
                                                \"
                                                colspan=\"3\"
                                              >
                                                
                                                <h1 style=\"Margin:0;line-height:45px;mso-line-height-rule:exactly;font-family:Poppins, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#28a745\">
                                               <br>
                                               ".$row_correo['titulo']."
                                                </h1>
                                              </td>
                                            </tr>
                                           
                                            <tr style=\"border-collapse: collapse\">
                                              <td
                                                align=\"center\"
                                                style=\"
                                                  padding: 0;
                                                  margin: 0;
                                                  padding-left: 30px;
                                                  padding-right: 30px;
                                                  padding-bottom: 25px;
                                                  padding-top: 25px;
                                                \"
                                                colspan=\"3\"
                                              >
                                                <p
                                                  style=\"
                                                    margin: 0;
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    font-family: helvetica, 'helvetica neue',
                                                      arial, verdana, sans-serif;
                                                    line-height: 24px;
                                                    color: #666666;
                                                    font-size: 16px;
                                                  \">
                                               ".$row_correo['parrafo1']."                                            
                                                </p>

                                                    <br>
                                                <p
                                                  style=\"
                                                    margin: 0;
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    font-family: helvetica, 'helvetica neue',
                                                      arial, verdana, sans-serif;
                                                    line-height: 24px;
                                                    color: #666666;
                                                    font-size: 16px;
                                                  \">
                                                ".$row_correo['parrafo2']."                                             
                                                </p>
                                              </td>
                                            </tr>
                                            <tr style=\"border-collapse: collapse\">
                                              <td
                                                align=\"center\"
                                                style=\"
                                                  padding: 0;
                                                  margin: 0;
                                                  padding-right: 30px;
                                                  padding-left: 30px;
                                                \"
                                                colspan=\"3\"
                                              >
                                                <p
                                                  style=\"
                                                    margin: 0;
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    font-family: helvetica, 'helvetica neue',
                                                      arial, verdana, sans-serif;
                                                    line-height: 24px;
                                                    color: #666666;
                                                    font-size: 16px;
                                                  \"
                                                >
                                                ".$row_correo['parrafo3']."
                                                </p>


                                                 <p
                                                  style=\"
                                                    margin: 0;
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    font-family: helvetica, 'helvetica neue',
                                                      arial, verdana, sans-serif;
                                                    line-height: 24px;
                                                    color: #666666;
                                                    font-size: 16px;
                                                  \"
                                                >
                                                <br>
                                                 ".$row_correo['parrafo4']."
                                                </p>


                                              </td>
                                            </tr>
                                            <tr style=\"border-collapse: collapse\">
                                              <td
                                                align=\"center\"
                                                style=\"
                                                  padding: 0;
                                                  margin: 0;
                                                  padding: 25px 40px 40px;
                                                \"
                                                colspan=\"3\"
                                              >
                                                <p
                                                  style=\"
                                                    margin: 0;
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    font-family: helvetica, 'helvetica neue',
                                                      arial, verdana, sans-serif;
                                                    line-height: 24px;
                                                    color: #666666;
                                                    font-size: 16px;
                                                  \"
                                                >
                                                 ".$row_correo['parrafo5']."
                                                </p>
                                              </td>
                                            </tr> 

                                              <tr style=\"border-collapse: collapse\">
                                              <td
                                                align=\"center\"
                                                style=\"
                                                  padding: 0;
                                                  margin: 0;
                                                  padding: 25px 40px 40px;
                                                \"
                                                colspan=\"3\"
                                              >
                                                <p
                                                  style=\"
                                                    margin: 0;
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    font-family: helvetica, 'helvetica neue',
                                                      arial, verdana, sans-serif;
                                                    line-height: 24px;
                                                    color: #666666;
                                                    font-size: 16px;
                                                  \"
                                                >
                                                ".$row_correo['parrafo6']."
                                                <br> <b>Hotel Calafia</b>
                                                </p>
                                              </td> 
                                            </tr> 

                                            </table>
                                        </td>
                                        </tr>
                                    </table>
                                    </td>
                                </tr>
                                </table>
                            </td>
                            </tr>
                        </table>

                         <table
                          class=\"es-content\"
                          cellspacing=\"0\"
                          cellpadding=\"0\"
                          align=\"center\"
                          role=\"none\"
                          style=\"
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-color: transparent; 
                            border-collapse: collapse;
                            border-spacing: 0px;
                            table-layout: fixed !important;
                            width: 100%;
                          \"
                        >
                          <tr style=\"border-collapse: collapse\">
                            <td
                              style=\"padding: 0; margin: 0; background-color: #fff\"
                              bgcolor=\"#fff\"
                              align=\"center\"
                            >
                              <table
                                class=\"es-content-body\"
                                style=\"
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-color: transparent; 
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  background-color: #fff;
                                  width: 600px;
                                \"
                                cellspacing=\"0\"
                                cellpadding=\"0\"
                                bgcolor=\"#fff\"
                                align=\"center\"
                                role=\"none\"
                              >
                                <tr style=\"border-collapse: collapse\">
                                  <td
                                    align=\"left\"
                                    bgcolor=\"#293641\"
                                    style=\"
                                      padding: 0;
                                      margin: 0;
                                      padding-left: 20px;
                                      padding-right: 20px;
                                      background-color: #cef4f4;
                                    \"
                                  >
                                    <table
                                      width=\"480px\"
                                      align=\"center\"
                                      cellspacing=\"0\"
                                      cellpadding=\"0\"
                                      role=\"none\"
                                      style=\"
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                        margin-bottom: 50px;
                                      \"
                                    >
                                      <tr style=\"border-collapse: collapse\">
                                        <td
                                          valign=\"top\"
                                          align=\"center\"
                                          style=\"padding: 0; margin: 0; width: 480px; \"
                                        >
                                          <table
                                            style=\"
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              border-collapse: collapse;
                                              border-spacing: 0px;
                                              background-position: left top;
                                              background-color:#ffffff;
                                              padding-bottom: 40px;
                                            \"
                                            width=\"100%\"
                                            bgcolor=\"#ffffff\"
                                            cellspacing=\"0\"
                                            cellpadding=\"0\"
                                            role=\"presentation\"
                                          >
                                            <tr class=\"es-m-p40t\" style=\"border-collapse: collapse\">
                                              <td class=\"es-m-p40t\" 
                                                align=\"center\"
                                                style=\"
                                                  padding: 0;
                                                  margin: 0;
                                                  padding-top: 5px;
                                                  padding-bottom: 5px;
                                                  font-size: 0px;
                                                \"
                                                colspan=\"3\"
                                              >
                                                
                                                <h4 style=\"Margin:0;line-height:45px;mso-line-height-rule:exactly;font-family:Poppins, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#28a745\">
                                               <br>
                                               Términos y condiciones
                                                </h4>
                                              </td>
                                            </tr>
                                           
                                            <tr style=\"border-collapse: collapse\">
                                              <td
                                                align=\"left\"
                                                style=\"
                                                  padding: 0;
                                                  margin: 0;
                                                  padding-left: 30px;
                                                  padding-right: 30px;
                                                  padding-bottom: 25px;
                                                \"
                                                colspan=\"3\"
                                              >

                                               <p style=\"
                                                margin: 0;
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
                                                line-height: 24px;
                                                color: #666666;
                                                font-size: 12px;
                                                \">
                                                <hr>
                                                </p> ";

                                              
                                                $sql = "SELECT * FROM `condiciones` WHERE id_leng='" . $lang . "' ORDER BY orden ASC";
                                                $result = $green->query($sql);
                                                if ($result->num_rows > 0) {
                                                  while ($row = $result->fetch_assoc()) {
                                            
                                                    $htmlContent .= "<p style=\"
                                                    margin: 0;
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
                                                    line-height: 24px;
                                                    color: #666666;
                                                    font-size: 12px;
                                                    \">
                                                    <img  src=\"https://araizadiamante.com/araiza_green/images/hoja.png\" alt=\"\" style=\"display: inline; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: 16px; margin-right: 8px;\">
                                                    ".$row['condicion']."
                                                    </p> ";
                                              
                                                  }
                                                }
                                                

                                                 $htmlContent .= "

                                              </td>
                                            </tr>
                                            
                                           
                                            </table>
                                        </td>
                                        </tr>
                                    </table>
                                    </td>
                                </tr>
                                </table>
                            </td>
                            </tr>
                        </table>

                        
                
                      </td>
                    </tr>
                  </table>
                </div>
              </body>
            </html>
            ";

            // Remitente
            $from = "araizadiamante@araizahoteles.com";
            $fromName = "Araiza Green";
            $subject   = "Gracias por unirte a la iniciativa Araiza Green";
            // Encabezado para información del remitente
            $headers = "From: $fromName"." <".$from.">";

            // Limite
            $semi_rand = md5(time()); 
            $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 

            // Encabezados para archivos adjuntos
            $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 

            // Límite multiparte
            $message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
            "Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n"; 

            $message .= "--{$mime_boundary}--";
            $returnpath = "-f" . $from;
           
            // Enviar correo
            $mail = @mail($to, $subject, $message, $headers, $returnpath);



header("HTTP/1.1 302 Moved Temporarily");
header("Location: ".$link);

