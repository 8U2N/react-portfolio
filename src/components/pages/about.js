import React from 'react';
import developerPhoto from "../../../static/assets/images/developer-photo.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + developerPhoto + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-column">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga illum similique necessitatibus ipsum quasi, error sunt distinctio tempore asperiores, saepe perferendis voluptas ab. Atque, reiciendis unde possimus deleniti inventore animi repudiandae. Expedita autem alias iure fugiat nam architecto! Obcaecati, molestias autem incidunt, sint voluptates ab natus maiores accusamus est, nisi expedita pariatur accusantium! Suscipit qui eum maxime, modi ab debitis vitae, sint error et assumenda distinctio voluptate, itaque quo nihil accusantium perspiciatis accusamus fuga? Velit necessitatibus reiciendis dignissimos quidem illum?
            </div>
        </div>
    );
}